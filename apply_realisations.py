#!/usr/bin/env python3
"""Correctif ciblé pour DAAK_TECH. Par défaut: aperçu; --apply: écrit avec sauvegarde.

  python apply_realisations.py --root .
  python apply_realisations.py --root . --apply

Le correctif accepte la version actuellement visible sur GitHub main et le correctif
Réalisations précédent. Aucun paquet npm n'est installé et aucun fichier .env n'est lu.
"""
from __future__ import annotations

import argparse
from datetime import datetime
from pathlib import Path
import shutil
import subprocess
import sys

BASE = Path(__file__).resolve().parent
SOURCE_FILES = {
    'src/data/projects.ts',
    'src/components/public/project-detail-visual.tsx',
    'src/components/public/project-cover.tsx',
}
ASSET_DIR = 'public/images/projects'
ASSETS = (
    'queueflow-ci-logo.png',
    'aumoinschere-logo.png',
    'queueflow-ci.png',
    'aumoinschere.png',
    'portfolio-developpeur.png',
    'fixtrack-ci.png',
)


def replace_once(value: str, before: str, after: str, label: str) -> str:
    if before not in value:
        raise ValueError(f"Structure inattendue dans {label} : {before[:110]!r}")
    return value.replace(before, after, 1)


def transform(root: Path) -> dict[Path, bytes]:
    modified: dict[Path, bytes] = {}

    for rel in SOURCE_FILES:
        dest = root / rel
        source = BASE / rel
        if not dest.is_file() or not source.is_file():
            raise ValueError(f"Fichier manquant : {rel}. Vérifier l'arborescence du projet.")
        current = dest.read_text(encoding='utf-8')
        if rel.endswith('projects.ts') and 'export const projects: Project[]' not in current:
            raise ValueError("projects.ts ne correspond pas à la structure du site.")
        if rel.endswith('project-detail-visual.tsx') and 'ProjectDetailVisual' not in current:
            raise ValueError("Composant ProjectDetailVisual non reconnu.")
        if rel.endswith('project-cover.tsx') and 'ProjectCover' not in current:
            raise ValueError("Composant ProjectCover non reconnu.")
        b = source.read_bytes()
        if dest.read_bytes() != b:
            modified[dest] = b

    pagepath = root / 'src/app/(public)/realisations/[slug]/page.tsx'
    page = pagepath.read_text(encoding='utf-8')
    old_page = page
    if 'logo={project.logo}' not in page:
        page = replace_once(
            page,
            '              title={project.shortTitle}\n              visualClass={project.visualClass}',
            '              title={project.shortTitle}\n              logo={project.logo}\n              visualClass={project.visualClass}',
            str(pagepath),
        )
    video_begin = page.find('      {/* =====================================================\n          VIDÉO DE PRÉSENTATION')
    video_end = page.find('      {/* =====================================================\n          CONTEXTE', video_begin)
    if video_begin < 0 or video_end <= video_begin:
        raise ValueError('Section vidéo introuvable. Le script ne modifie rien.')
    video = page[video_begin:video_end]
    if '{project.videoUrl && (' not in video:
        video = replace_once(
            video,
            '      <section className="bg-daak-light py-20 lg:py-28">',
            '      {project.videoUrl && (\n      <section className="bg-daak-light py-20 lg:py-28">',
            'vidéo',
        )
        idx = video.rfind('      </section>')
        if idx < 0:
            raise ValueError('Fin de la section vidéo introuvable.')
        video = video[:idx] + video[idx:].replace('      </section>', '      </section>\n      )}', 1)
        page = page[:video_begin] + video + page[video_end:]
    tech_header = '          TECHNOLOGIES — SLIDER AUTOMATIQUE'
    result_header = '          RÉSULTAT'
    hi = page.find(tech_header)
    ri = page.find(result_header, hi)
    if hi < 0 or ri < 0:
        raise ValueError('Section Technologies / Résultat non reconnue.')
    start = page.rfind('      {/* =====================================================', 0, hi)
    end = page.rfind('      {/* =====================================================', 0, ri)
    if start < 0 or end <= start:
        raise ValueError('Section Technologies mal délimitée.')
    tech = page[start:end]
    if 'project.stack.length > 0' not in tech:
        tech = replace_once(
            tech,
            '      <section\n        className="\n          overflow-hidden',
            '      {project.stack.length > 0 && (\n      <section\n        className="\n          overflow-hidden',
            'Technologies',
        )
        idx = tech.rfind('      </section>')
        if idx < 0:
            raise ValueError('Fermeture Technologies introuvable.')
        tech = tech[:idx] + tech[idx:].replace('      </section>', '      </section>\n      )}', 1)
        page = page[:start] + tech + page[end:]
    if old_page != page:
        modified[pagepath] = page.encode('utf-8')

    showcasepath = root / 'src/components/public/project-showcase.tsx'
    show = showcasepath.read_text(encoding='utf-8')
    old_show = show
    if 'import Image from "next/image";' not in show:
        show = replace_once(show, 'import Link from "next/link";', 'import Link from "next/link";\nimport Image from "next/image";', 'showcase import')
    if 'fit="contain"' not in show:
        # Un aperçu éditorial / une capture n'est pas recadrée par les cartes.
        show = show.replace('className="rounded-[24px]" />', 'className="rounded-[24px]" fit="contain" />')
        show = replace_once(show, 'className=""', 'className=""', 'noop') if False else show
        show = replace_once(show,
            'sizes="(max-width: 1024px) 100vw, 58vw" />',
            'sizes="(max-width: 1024px) 100vw, 58vw" fit="contain" />',
            'showcase cover',
        )
    show = show.replace('Aperçu défilant', 'Aperçu complet')
    if 'project.logo && (' not in show:
        needle = '            <h2 className="font-heading text-3xl font-bold tracking-[-0.04em] md:text-4xl">{project.title}</h2>'
        addition = '''            {project.logo && (
              <div className={cn(
                "relative mb-5 h-16 w-[188px] max-w-full overflow-hidden rounded-xl border border-white/20 shadow-[0_12px_36px_rgba(0,0,0,.2)]",
                project.slug === "au-moins-chere" ? "bg-black" : "bg-white",
              )}>
                <Image src={project.logo} alt={`Logo ${project.title}`} fill sizes="188px" className="object-contain p-2" />
              </div>
            )}
'''
        show = replace_once(show, needle, addition + needle, 'showcase logo')
    if 'role="tablist" aria-label="Filtrer les réalisations"' in show:
        show = show.replace('role="tablist" aria-label="Filtrer les réalisations"', 'role="group" aria-label="Filtrer les réalisations"')
        show = show.replace('role="tab"\n              aria-selected={on}', 'type="button"\n              aria-pressed={on}')
    if 'aria-live="polite"' not in show:
        show = replace_once(show,
            '      <motion.div layout className="grid grid-cols-12 gap-6 lg:gap-8">',
            '      <p aria-live="polite" className="mb-6 text-sm text-slate-500">\n'
            '        {visible.length} {visible.length === 1 ? "projet affiché" : "projets affichés"}\n'
            '      </p>\n\n      <motion.div layout className="grid grid-cols-12 gap-6 lg:gap-8">',
            'showcase live count',
        )
    if old_show != show:
        modified[showcasepath] = show.encode('utf-8')

    listingpath = root / 'src/app/(public)/realisations/page.tsx'
    listing = listingpath.read_text(encoding='utf-8')
    revised = listing.replace(
        'Filtrez par type de projet, puis survolez une capture pour la faire défiler.',
        'Choisissez une catégorie, puis explorez les fonctionnalités et le parcours de chaque projet.',
    )
    if revised != listing:
        modified[listingpath] = revised.encode('utf-8')

    maintenancepath = root / 'src/config/maintenance.ts'
    maintenance = maintenancepath.read_text(encoding='utf-8')
    revised = maintenance.replace('realisations: true', 'realisations: false')
    if 'realisations: false' not in revised:
        raise ValueError('Configuration Réalisations introuvable.')
    if revised != maintenance:
        modified[maintenancepath] = revised.encode('utf-8')

    for name in ASSETS:
        rel = f'{ASSET_DIR}/{name}'
        source = BASE / rel
        if not source.is_file():
            raise ValueError(f'Asset absent : {rel}')
        target = root / rel
        if not target.is_file() or target.read_bytes() != source.read_bytes():
            modified[target] = source.read_bytes()

    return modified


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--root', type=Path, default=Path('.'))
    parser.add_argument('--apply', action='store_true')
    args = parser.parse_args()
    root = args.root.resolve()
    if not (root / 'package.json').is_file():
        parser.error('Dossier Next.js non trouvé. Lance cette commande à la racine du projet.')
    try:
        changes = transform(root)
    except (OSError, ValueError) as exc:
        print('ERREUR :', exc, file=sys.stderr)
        return 1
    if not changes:
        print('Aucun changement nécessaire : le correctif est déjà appliqué.')
        return 0
    print(f'{len(changes)} fichier(s) concernés :')
    for file in sorted(changes):
        print(' -', file.relative_to(root))
    if not args.apply:
        print('\nMODE APERÇU : aucun fichier modifié. Ajouter --apply pour écrire.')
        return 0
    backup = root.parent / f'DAAK_TECH_backup_realisations_premium_{datetime.now():%Y%m%d_%H%M%S}'
    for file in changes:
        if file.exists():
            to = backup / file.relative_to(root)
            to.parent.mkdir(parents=True, exist_ok=True)
            shutil.copy2(file, to)
    for file, content in changes.items():
        file.parent.mkdir(parents=True, exist_ok=True)
        file.write_bytes(content)
    print('\nCorrectif appliqué. Anciennes versions sauvegardées dans :', backup)
    print('Contrôles recommandés : npm run build ; git diff --stat ; npm run start')
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
