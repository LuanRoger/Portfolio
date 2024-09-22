"use client";

import { Tech } from "@/lib/types/tech";
import { Badge } from "./ui/badge";
import { cloneElement } from "react";
import { motion } from "framer-motion";

interface TechProps {
  tech: Tech;
  index?: number | undefined;
}

export function TechBadge({ tech, index }: TechProps) {
  const { name, color, link, icon } = tech;

  return (
    <motion.a
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: index ? index * 0.1 : 0 }}
      href={link}
    >
      <Badge
        variant={"outline"}
        className={`gap-1 items hover:bg-primary hover:text-primary-foreground py-2`}
      >
        {cloneElement(icon, { fill: color, className: "w-4 h-4" })}
        <p>{name}</p>
      </Badge>
    </motion.a>
  );
}