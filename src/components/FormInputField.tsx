interface FormInputFieldProps {
  placeholder: string;
  inputType: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  name?: string;
  error?: string;
}

const FormInputField: React.FC<FormInputFieldProps> = ({
  placeholder,
  inputType,
  value,
  onChange,
  name,
  error,
}) => {
  return (
    <div className="relative flex flex-col items-center mb-4 transition-300">
      <input
        className={`h-[56px] w-full xs:max-w- px-4 py-1 rounded-md tracking-wide
                    bg-transparent border-2 transition-300 focus:outline-none focus:ring-2 focus:ring-accent-blue
                    hover:border-accent-blue/50 hover:placeholder:text-accent-blue/80
                    ${error ? "border-primary-red" : "border-[#E0E0E0]"}`}
        type={inputType}
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />

      {/* Error Message */}
      {error && (
        <span className="text-xs italic text-primary-red text-right mt-1 w-full ">
          {error}
        </span>
      )}

      {/* Error Icon */}
      {error && (
        <img
          className="absolute right-3 top-[22.5%]"
          src="/icon-error.svg"
          alt={`Error icon telling: ${error}`}
        />
      )}
    </div>
  );
};

export default FormInputField;
