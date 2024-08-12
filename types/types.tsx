import { ButtonProps } from "@/components/ui/button";

export type LinkItem = {
  label: string;
  url: string;
  newTab?: boolean;
};

export type Navigation = LinkItem[];
