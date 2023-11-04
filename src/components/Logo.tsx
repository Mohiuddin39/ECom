import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

interface props {
  className?: string;
  spanClassName?: string;
}

const Logo = ({ spanClassName, className }: props) => {
  return (
    <Link
      href={"/"}
      className={cn(
        "text-zinc-950 text-xl underline underline-offset-4 decoration-[1px] group",
        className
      )}
    >
      mohiud
      <span
        className={cn(
          "bg-zinc-950 text-white w-9 h-9 rounded-full inline-flex items-center justify-center text-xl font-bold ml-0.5 group-hover:bg-blue-700 duration-200",
          spanClassName
        )}
      >
        Din
      </span>
    </Link>
  );
};

export default Logo;
