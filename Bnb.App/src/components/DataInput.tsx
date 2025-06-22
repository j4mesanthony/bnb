type DataInputProps = {
  label?: string | null;
  handleChange: (arg: string | number) => void;
};

export default function DataInput({ label, handleChange }: DataInputProps) {
  return (
    <>
      <div className=" flex flex-col gap-1">
        {!!label && <span data-testid="datainput-label">{label}:</span>}
        <input
          type="text"
          onChange={(e) => handleChange(e.target.value)}
          data-testid="datainput-input"
        />
      </div>
    </>
  );
}
