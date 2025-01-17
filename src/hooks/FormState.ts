import { useState } from "react";

// Regular expression for basic email validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const useFormState = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent form submission

    // Validate inputs
    const newErrors = { ...errors };

    // Validate first name
    if (!formData.firstName) newErrors.firstName = "First name cannot be empty";
    else newErrors.firstName = "";

    // Validate last name
    if (!formData.lastName) newErrors.lastName = "Last name cannot be empty";
    else newErrors.lastName = "";

    // Validate email
    if (!formData.email) {
      newErrors.email = "Email cannot be empty";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Looks like this is not an email";
    } else {
      newErrors.email = "";
    }

    // Validate password
    if (!formData.password) newErrors.password = "Password cannot be empty";
    else newErrors.password = "";

    setErrors(newErrors);

    // If there are no errors, process the form (e.g., send data)
    if (!Object.values(newErrors).some((error) => error)) {
      console.log("Form submitted successfully");
    }
  };

  return { formData, errors, handleInputChange, handleSubmit };
};
