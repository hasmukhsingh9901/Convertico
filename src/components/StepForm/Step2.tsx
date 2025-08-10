import { Button, Slider } from "antd";
import React from "react";
import type { StepProps } from "../../types";

const Step2: React.FC<StepProps> = ({
  formData,
  updateFormData,
  onNext,
  onPrevious,
  stepNumber,
  totalSteps,
}) => {
  const handleInputChange = (field: string, value: string): void => {
    updateFormData({ [field]: value });
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    onNext();
  };



  return (
    <div className=" p-10  w-full max-w-lg relative z-10">
      <div className="text-slate-500 text-sm mb-2">
        Step {stepNumber}/{totalSteps}
      </div>
      <h1 className="text-3xl font-bold text-slate-800 mb-2">
        Company Details
      </h1>
      <p className="text-slate-600 mb-8 leading-relaxed">
        Tell us about your company to help us customize your experience.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col gap-2">
          <label className="font-medium text-slate-700 text-sm">
            Company name
          </label>
          <input
            id="form-input"
            type="text"
            className="px-4 py-3 border-2 border-slate-200 rounded-lg text-base transition-all duration-300 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500 focus:ring-opacity-10"
            value={formData.companyName}
            onChange={(e) => handleInputChange("companyName", e.target.value)}
            placeholder="Enter your company name"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-medium text-slate-700 text-sm">
            Company size
          </label>
          <Slider range defaultValue={[0, 50]} />
        </div>
        <div className="">
          <div className="flex flex-col gap-2">
            <label className="font-medium text-slate-700 text-sm">
              Industry
            </label>
            <select
              className="px-4 py-3 border-2 border-slate-200 rounded-lg text-base transition-all duration-300 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500 focus:ring-opacity-10"
              value={formData.industry}
              id="form-intput"
              onChange={(e) => handleInputChange("industry", e.target.value)}
            >
              <option id="form-input" value="">Select industry</option>
              <option id="form-input" value="technology">Technology</option>
              <option id="form-input" value="healthcare">Healthcare</option>
              <option id="form-input" value="finance">Finance</option>
              <option id="form-input" value="education">Education</option>
              <option id="form-input" value="retail">Retail</option>
              <option id="form-input" value="manufacturing">Manufacturing</option>
              <option id="form-input" value="consulting">Consulting</option>
              <option id="form-input" value="other">Other</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-end gap-4 pt-8">
          <Button
            type="default"
            className="w-full sm:w-auto px-8 py-3 border-2 border-slate-200 text-slate-600 font-semibold rounded-lg text-base transition-all duration-300 hover:bg-slate-50 hover:border-slate-300"
            onClick={onPrevious}
          >
            Previous
          </Button>
          <Button
            type="primary"
            onClick={handleSubmit}
            className="w-full sm:w-auto px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg text-base transition-all duration-300 hover:bg-blue-600 hover:transform hover:-translate-y-0.5 hover:shadow-lg"
          >
            Next
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Step2;
