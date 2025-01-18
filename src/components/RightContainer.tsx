import PricingCard from "../components/PricingCard";
import FormInputField from "../components/FormInputField";
import FormInputSubmitBtn from "./FormInputSubmitBtn";
import FormModal from "../components/FormModal";
import { useFormState } from "../hooks/FormState";

const RightContainer: React.FC = () => {
  const {
    formData,
    errors,
    handleInputChange,
    handleSubmit,
    isModalOpen,
    closeModal,
  } = useFormState();

  return (
    <div className="flex flex-auto flex-col max-h-[568px] mb-16 lg:mb-0 transition-300">
      <PricingCard
        highlights="Try it free "
        description="7 days then $20/mo. thereafter"
      />

      <form
        className="bg-white mt-8 rounded-xl p-6 shadow-[0px_8px_0px_rgba(0,_0,_0,_0.20)]"
        onSubmit={handleSubmit}
      >
        <FormInputField
          placeholder="First Name"
          inputType="text"
          value={formData.firstName}
          onChange={handleInputChange}
          name="firstName"
          error={errors.firstName}
        />
        <FormInputField
          placeholder="Last Name"
          inputType="text"
          value={formData.lastName}
          onChange={handleInputChange}
          name="lastName"
          error={errors.lastName}
        />
        <FormInputField
          placeholder="Email Address"
          inputType="email"
          value={formData.email}
          onChange={handleInputChange}
          name="email"
          error={errors.email}
        />
        <FormInputField
          placeholder="Password"
          inputType="password"
          value={formData.password}
          onChange={handleInputChange}
          name="password"
          error={errors.password}
        />

        <FormInputSubmitBtn placeholder={"CLAIM YOUR FREE TRIAL"} />

        <p className="text-xs">
          by clicking the button, you are agreeing to our{" "}
          <a
            className="font-bold cursor-pointer text-primary-red 
            hover:text-accent-blue hover:underline focus:text-accent-blue transition-300"
            href="http://"
          >
            Terms and Services
          </a>
        </p>
      </form>

      {/* Modal */}
      <FormModal
        isOpen={isModalOpen}
        onClose={closeModal}
        formData={{
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
        }}
      />
    </div>
  );
};

export default RightContainer;
