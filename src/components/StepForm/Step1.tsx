import { Button, message } from "antd";
import React, { useState } from "react";
import type { StepProps } from "../../types";

const Step1: React.FC<StepProps> = ({
  formData,
  updateFormData,
  onNext,
  stepNumber,
  totalSteps,
}) => {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateField = (field: string, value: string): string => {
    switch (field) {
      case 'firstName':
        if (!value.trim()) return 'First name is required';
        if (value.length < 2) return 'First name must be at least 2 characters';
        if (!/^[a-zA-Z\s]+$/.test(value)) return 'First name can only contain letters';
        return '';
      
      case 'lastName':
        if (!value.trim()) return 'Last name is required';
        if (value.length < 2) return 'Last name must be at least 2 characters';
        if (!/^[a-zA-Z\s]+$/.test(value)) return 'Last name can only contain letters';
        return '';
      
      case 'email':
        if (!value.trim()) return 'Email is required';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return 'Please enter a valid email address';
        return '';
      
      case 'mobileNumber':
        if (!value.trim()) return 'Mobile number is required';
        if (!/^\d{10}$/.test(value)) return 'Mobile number must be 10 digits';
        return '';
      
      default:
        return '';
    }
  };

  const handleInputChange = (field: string, value: string): void => {
    updateFormData({ [field]: value });
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleBlur = (field: string, value: string): void => {
    const error = validateField(field, value);
    setErrors(prev => ({ ...prev, [field]: error }));
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors: Record<string, string> = {};
    newErrors.firstName = validateField('firstName', formData.firstName || '');
    newErrors.lastName = validateField('lastName', formData.lastName || '');
    newErrors.email = validateField('email', formData.email || '');
    newErrors.mobileNumber = validateField('mobileNumber', formData.mobileNumber || '');
    
    setErrors(newErrors);
    
    // Check if there are any errors
    const hasErrors = Object.values(newErrors).some(error => error !== '');
    
    if (hasErrors) {
      message.error('Please fix the validation errors before proceeding');
      return;
    }
    
    onNext();
  };

  return (
    <div className=" p-10  w-full max-w-xl relative z-10">
      <div className="text-slate-500 text-sm mb-2">
        Step {stepNumber}/{totalSteps}
      </div>
      <h1 className="text-3xl font-bold text-slate-800 mb-2">Basic Info</h1>
      <p className="text-slate-600 mb-8 leading-relaxed">
        Tell us a bit about yourself to get started with your new CRM account.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <label className="font-medium text-slate-700 text-sm">
              First name <span className="text-red-500">*</span>
            </label>
            <input
              id="form-input"
              type="text"
              className={`px-4 py-3 border-2 rounded-lg text-base transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-opacity-10 ${
                errors.firstName 
                  ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
                  : 'border-slate-200 focus:border-blue-500 focus:ring-blue-500'
              }`}
              value={formData.firstName}
              onChange={(e) => handleInputChange("firstName", e.target.value)}
              onBlur={(e) => handleBlur("firstName", e.target.value)}
              placeholder="Enter your first name"
              required
            />
            {errors.firstName && (
              <span className="text-red-500 text-sm mt-1">{errors.firstName}</span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-medium text-slate-700 text-sm">
              Last name <span className="text-red-500">*</span>
            </label>
            <input
              id="form-input"
              type="text"
              className={`px-4 py-3 border-2 rounded-lg text-base transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-opacity-10 ${
                errors.lastName 
                  ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
                  : 'border-slate-200 focus:border-blue-500 focus:ring-blue-500'
              }`}
              value={formData.lastName}
              onChange={(e) => handleInputChange("lastName", e.target.value)}
              onBlur={(e) => handleBlur("lastName", e.target.value)}
              placeholder="Enter your last name"
              required
            />
            {errors.lastName && (
              <span className="text-red-500 text-sm mt-1">{errors.lastName}</span>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-medium text-slate-700 text-sm">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="form-input"
            type="email"
            className={`px-4 py-3 border-2 rounded-lg text-base transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-opacity-10 ${
              errors.email 
                ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
                : 'border-slate-200 focus:border-blue-500 focus:ring-blue-500'
            }`}
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            onBlur={(e) => handleBlur("email", e.target.value)}
            placeholder="Enter your email address"
            required
          />
          {errors.email && (
            <span className="text-red-500 text-sm mt-1">{errors.email}</span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-medium text-slate-700 text-sm">
            Mobile number <span className="text-red-500">*</span>
          </label>
          <div className="flex flex-col sm:flex-row">
            <div className="py-3 border-2 bg-transparent border-slate-200 border-l-2 border-r-0 rounded-l-lg bg-slate-50 text-slate-600 text-base min-w-20 text-center">
              +91
            </div>
            <input
              id="form-input"
              type="tel"
              maxLength={10}
              className={`flex-1 px-4 py-3 border-2 border-l-0 rounded-r-lg text-base transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-opacity-10 ${
                errors.mobileNumber 
                  ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
                  : 'border-slate-200 focus:border-blue-500 focus:ring-blue-500'
              }`}
              value={formData.mobileNumber}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, '');
                handleInputChange("mobileNumber", value);
              }}
              onBlur={(e) => handleBlur("mobileNumber", e.target.value)}
              placeholder="Enter your mobile number"
              required
            />
          </div>
          {errors.mobileNumber && (
            <span className="text-red-500 text-sm mt-1">{errors.mobileNumber}</span>
          )}
        </div>

        <div className="flex justify-start pt-8">
          <Button
          onClick={handleSubmit}
            type="primary"
            className="w-full sm:w-auto px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg text-base transition-all duration-300 hover:bg-blue-600 hover:transform hover:-translate-y-0.5 hover:shadow-lg"
          >
            Next
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Step1;
