import { cn } from "@/lib/utils";

export default function HeaderLine({ className }: { className?: string }) {
  return <div className={cn("h-[9px] w-[210px] bg-secondary", className)} />;
}
