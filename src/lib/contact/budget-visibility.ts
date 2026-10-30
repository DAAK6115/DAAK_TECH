/** Prestations pour lesquelles demander une enveloppe financière est utile. */
const servicesAvecBudget = new Set<string>([
  "developpement-applications-web-mobiles",
  "conception-sites-web-professionnels",
  "reseaux-informatiques-infrastructure",
  "vente-ordinateurs-accessoires",
  "communication-digitale-design",
  "production-audiovisuelle",
  "videosurveillance-securite-electronique",
]);

export function serviceUsesBudget(serviceSlug: string): boolean {
  return servicesAvecBudget.has(serviceSlug);
}
