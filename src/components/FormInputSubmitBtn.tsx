interface FormInputSubmitBtn {
  placeholder: string;
}

const FormInputSubmitBtn: React.FC<FormInputSubmitBtn> = ({ placeholder }) => {
  return (
    <div
      className="flex flex-col items-center mb-4 relative 
    border-accent-darkgreen border-2 rounded-md box-border transition-300
    bg-primary-green hover:bg-accent-darkgreen text-white"
    >
      {/* Submit Button */}
      <input
        className={`h-[56px] w-full max-w-[279px] rounded-md
          focus:outline-none focus:ring-4 focus:ring-accent-darkgreen focus:border-accent-darkgreen 
          transition-300 font-semibold cursor-pointer tracking-wide`}
        type="submit"
        value={placeholder}
      />
    </div>
  );
};

export default FormInputSubmitBtn;
