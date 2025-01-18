import React from "react";

interface FormModalProps {
  isOpen: boolean;
  onClose: () => void;
  formData: {
    firstName: string;
    lastName: string;
    email: string;
  };
}

const FormModal: React.FC<FormModalProps> = ({ isOpen, onClose, formData }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-[350px] sm:max-w-[400px]">
        <h2 className="text-xl font-bold text-center mb-4 text-accent-blue">
          Sign-Up Successful!
        </h2>
        <p className="text-center text-neutral-darkBlue max-w-[80%] mx-auto">
          You have successfully signed up for the{" "}
          <b className="text-accent-darkgreen">7-day trial!</b>
        </p>
        <div className="mt-4">
          <p className="font-semibold text-neutral-darkBlue">Your Details:</p>
          <ul className="mt-2 text-sm text-neutral-darkBlue text-left">
            <li>
              <strong>First Name:</strong> {formData.firstName}
            </li>
            <li>
              <strong>Last Name:</strong> {formData.lastName}
            </li>
            <li>
              <strong>Email:</strong> {formData.email}
            </li>
          </ul>
        </div>
        <button
          onClick={onClose}
          className="mt-6 bg-accent-blue text-white py-2 px-4 rounded-lg w-full hover:bg-accent-blue/90"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default FormModal;
