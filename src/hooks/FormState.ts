import { useState } from "react";

// Regular expression for basic email validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Regular expression for validating names (only letters and spaces)
const nameRegex = /^[A-Za-z]+(?: [A-Za-z]+)*$/;

export const useFormState = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  // State to manage form error messages
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  // State to manage modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  /**
   * Handle input changes and update form data state.
   * Perform real-time validation for email, name, and password.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} e - Input change event
   */
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Update form data
    setFormData({ ...formData, [name]: value });

    // Perform real-time validation
    setErrors((prev) => ({
      ...prev,
      [name]:
        name === "email" && !emailRegex.test(value)
          ? "Invalid email"
          : name === "firstName" && (value.length < 2 || !nameRegex.test(value))
          ? value.length < 2
            ? "First name must be at least 2 letters"
            : "First name can only contain letters"
          : name === "lastName" && (value.length < 2 || !nameRegex.test(value))
          ? value.length < 2
            ? "Last name must be at least 2 letters"
            : "Last name can only contain letters"
          : name === "password" && value.length < 8
          ? "Password must be at least 8 characters"
          : "",
    }));
  };

  /**
   * Handle form submission, validate inputs, and toggle modal if no errors.
   *
   * @param {React.FormEvent} e - Form submission event
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission

    // Perform validation for all fields
    const newErrors = {
      firstName: !formData.firstName
        ? "First name is required"
        : formData.firstName.length < 2
        ? "First name must be at least 2 letters"
        : !nameRegex.test(formData.firstName)
        ? "First name can only contain letters"
        : "",
      lastName: !formData.lastName
        ? "Last name is required"
        : formData.lastName.length < 2
        ? "Last name must be at least 2 letters"
        : !nameRegex.test(formData.lastName)
        ? "Last name can only contain letters"
        : "",
      email: !formData.email
        ? "Email is required"
        : !emailRegex.test(formData.email)
        ? "Invalid email"
        : "",
      password: !formData.password
        ? "Password is required"
        : formData.password.length < 8
        ? "Password must be at least 8 characters"
        : "",
    };

    // Update errors state
    setErrors(newErrors);

    // If no validation errors exist, show success modal
    if (!Object.values(newErrors).some((error) => error)) {
      setIsModalOpen(true);
    }
  };

  /**
   * Close the modal by updating its state.
   */
  const closeModal = () => setIsModalOpen(false);

  return {
    formData, // Current form input values
    errors, // Current validation error messages
    handleInputChange, // Function to update form data and clear errors
    handleSubmit, // Function to handle form submission
    isModalOpen, // Modal visibility state
    closeModal, // Function to close the modal
  };
};
