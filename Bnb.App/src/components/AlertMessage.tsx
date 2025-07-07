import { AlertType } from "../consts/AlertType";

type AlertMessageProps = {
  children: string;
  type?: number;
};

export default function AlertMessage({ children, type }: AlertMessageProps) {
  const colorClasses = `${
    type === AlertType.Warning
      ? "bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-100"
      : type === AlertType.Error
      ? "bg-red-200 dark:bg-red-900 text-red-800 dark:text-red-100"
      : type === AlertType.Success
      ? "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100"
      : "bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100"
  }`;

  return (
    <div
      className={`p-4 mb-4 text-sm rounded-lg  ${colorClasses}`}
      role="alert"
      aria-label={children}
    >
      {children}
    </div>
  );
}
