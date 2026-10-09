import { cn } from "@/lib/utils";
import { SplitText } from "@/components/ui/split-text";

type SectionHeadingProps = {
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({ title, description, align = "left", className }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      <h2 className="font-heading text-3xl font-bold leading-tight tracking-[-0.03em] text-daak-text md:text-4xl lg:text-5xl">
        <SplitText text={title} />
      </h2>
      {description && (
        <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">{description}</p>
      )}
    </div>
  );
}
