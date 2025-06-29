import type { ReactNode } from "react";

interface PrimaryButtonProps {
  children?: ReactNode | string;
}

export default function PrimaryButton({
  children = "PrimaryButton",
}: PrimaryButtonProps) {
  return (
    <button className="w-full px-6 py-3.5 text-base font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      {children}
    </button>
  );
}
