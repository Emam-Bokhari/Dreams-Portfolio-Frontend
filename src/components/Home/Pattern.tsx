"use client";

import { cn } from "@/lib/utils";
import { DotPattern } from "../magicui/dot-pattern";

export function Pattern() {
  return (
    <div className="absolute inset-0 -z-10 flex h-full w-full items-center justify-center overflow-hidden">
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
        )}
      />
    </div>
  );
}
