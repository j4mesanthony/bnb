type DataInputProps = {
  handleChange: (arg: string | number) => void;
  id: string;
  label?: string | null;
};

export default function DataInput({
  handleChange,
  id,
  label = "",
}: DataInputProps) {
  return (
    <>
      <div className=" flex flex-col gap-1">
        {!!label && <label htmlFor={id}>{label}</label>}
        <input
          id={id}
          type="text"
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
    </>
  );
}
