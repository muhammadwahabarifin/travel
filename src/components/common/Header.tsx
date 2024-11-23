import { cn } from "@/lib/utils";
import React from "react";

interface Iprops {
  title: string;
  description: string;
  isLongUnderline?: boolean;
}

const Header = ({ title, description, isLongUnderline = true }: Iprops) => {
  return (
    <div>
      <p className={cn("text-[30px] md:text-[64px] text-primary")}>{title}</p>
      {isLongUnderline ? (
        <div className="w-[300px] h-1 bg-primary my-4 mt-0"></div>
      ) : (
        <div className="w-[300px] h-1 bg-primary my-4 mt-0"></div>
      )}
      <p className="text-yellow-400">{description}</p>
    </div>
  );
};

export default Header;
