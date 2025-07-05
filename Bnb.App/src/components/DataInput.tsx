type InputType =
  | "checkbox"
  | "email"
  | "file"
  | "hidden"
  | "number"
  | "password"
  | "radio"
  | "search"
  | "text";

type DataInputProps = {
  handleChange: (arg: string | number) => void;
  id: string;
  label?: string | null;
  type?: InputType;
  value: string | number;
};

export default function DataInput({
  handleChange,
  id,
  label = "",
  type = "text",
  value,
}: DataInputProps) {
  return (
    <>
      <div className=" flex flex-col gap-1">
        {!!label && (
          <label
            htmlFor={id}
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            {label}
          </label>
        )}
        <input
          id={id}
          type={type}
          value={value}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
    </>
  );
}
