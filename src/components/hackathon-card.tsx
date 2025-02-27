import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Props } from "../../tailwind.config";

export function HackathonCard({
  title,
  description,
  dates,
  links,
}: Props) {
  return (
    <li className="relative ml-10 py-4">
      <div className="absolute -left-16 top-2 flex items-center justify-center bg-white rounded-full">
      </div>
      <div className="flex flex-1 flex-col justify-start gap-1">
        {dates && (
          <time className="text-xs text-muted-foreground">{dates}</time>
        )}
        <h2 className="font-semibold leading-none">{title}</h2>
        {description && (
          <span className="prose dark:prose-invert text-sm text-muted-foreground">
            {description}
          </span>
        )}
      </div>
    </li>
  );
}
