import type { ReactNode } from "react";

interface PrimaryButtonProps {
  children?: ReactNode | string;
  isDisabled?: boolean;
  handleClick: () => void;
}

export default function PrimaryButton({
  children = "PrimaryButton",
  isDisabled = false,
  handleClick,
}: PrimaryButtonProps) {
  return (
    <button
      disabled={isDisabled}
      aria-disabled={isDisabled}
      onClick={handleClick}
      className={`w-full ${
        isDisabled
          ? "cursor-not-allowed bg-gray-200 text-gray-400 dark:bg-gray-700 dark:text-gray-600"
          : "cursor-pointer text-white bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 "
      } px-6 py-3.5 text-base font-medium focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:focus:ring-blue-800`}
    >
      {children}
    </button>
  );
}
