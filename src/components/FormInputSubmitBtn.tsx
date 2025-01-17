interface FormInputSubmitBtn {
  placeholder: string;
  error?: string; // Optional error prop
}

const FormInputSubmitBtn: React.FC<FormInputSubmitBtn> = ({
  placeholder,
  error,
}) => {
  return (
    <div className="flex flex-col items-center mb-4 relative">
      {/* Submit Button */}
      <input
        className={`h-[56px] w-full max-w-[279px] px-4 py-1 rounded-[4px] tracking-wide 
          bg-transparent border-2 border-[#38cc8d] transition-all duration-500 ease-out 
          focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-accent-blue hover:border-accent-blue/50
          bg-[#38cc8e] hover:bg-accent-darkgreen text-white font-semibold cursor-pointer`}
        type="submit"
        value={placeholder} // Button text will be the placeholder prop value
      />

      {/* Error Message with Smooth Transition */}
      {error && (
        <span className="text-xs italic text-primary-red mt-1 w-full max-w-[279px] text-right transition-opacity duration-300 ease-in opacity-100">
          {error}
        </span>
      )}

      {/* Error Icon with Smooth Transition */}
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

export default FormInputSubmitBtn;
