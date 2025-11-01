import * as React from "react";

import { cn } from "../../lib/utils";

function Input({ className, type, ...props }) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-9 w-full min-w-0 rounded-md border border-transparent bg-gray-100 px-3 py-1 text-base text-gray-800 shadow-xs placeholder:text-gray-500 transition-colors outline-none",
        "focus:outline-none focus:ring-0 focus:border-transparent focus:bg-gray-100",
        "mt-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 text-sm",
        className
      )}
      {...props}
    />
  );
}

export { Input };
