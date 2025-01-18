import React from "react";

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TermsModal: React.FC<TermsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Don't render the modal if it's not open

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Terms and Services</h2>
        <p className="text-sm mb-4">
          By using this service, you agree to the following terms and
          conditions. These terms govern your use of our website, services, and
          products. Please read them carefully.
        </p>
        <p className="text-sm mb-4 text-left">
          1. You must be 12 years or older to use this service.
          <br />
          2. You agree to provide accurate and up-to-date information.
          <br />
          3. You agree not to misuse or abuse the service.
          <br />
          4. We reserve the right to modify or terminate the service at any
          time.
        </p>
        <div className="flex justify-end">
          <button
            className="bg-primary-red text-white px-8 py-2 rounded-md"
            onClick={onClose} // Close modal
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default TermsModal;
