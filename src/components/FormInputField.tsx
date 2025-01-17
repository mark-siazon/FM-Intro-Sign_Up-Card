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
    <div className="flex flex-col items-center mb-4 relative">
      <input
        className="h-[56px] w-full max-w-[279px] px-4 py-1 rounded-[4px] tracking-wide
          bg-transparent border-2 border-[#E0E0E0] transition-all duration-500 ease-out
          focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-accent-blue hover:border-accent-blue/50"
        type={inputType}
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />

      {/* Error message with smooth transition */}
      {error && (
        <span className="text-xs italic text-primary-red mt-1 w-full max-w-[279px] text-right transition-opacity duration-300 ease-in opacity-100">
          {error}
        </span>
      )}

      {/* Error icon with smooth transition */}
      {error && (
        <img
          className="absolute right-3 top-[22.5%] transition-all duration-300 ease-in opacity-100"
          src="src/assets/icon-error.svg"
          alt="Error icon"
        />
      )}
    </div>
  );
};

export default FormInputField;
