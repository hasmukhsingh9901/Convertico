import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';
import type { StepProps } from '../../types';


interface Role {
  label: string;
  value: string;
}

const roles: Role[] = [
  { label: 'Sales Manager', value: 'sales_manager' },
  { label: 'Super admin', value: 'super_admin' },
  { label: 'Admin', value: 'admin' },
  { label: 'Marketing Manager', value: 'marketing_manager' },
  { label: 'Customer Support', value: 'support' },
  { label: 'Data Analyst', value: 'data_analyst' },
  { label: 'Others', value: 'other' },
];

const Step3: React.FC<StepProps> = ({ 
  formData, 
  updateFormData, 
  onNext, 
  onPrevious, 
  stepNumber, 
  totalSteps 
}) => {
  const handleInputChange = (field: string, value: string): void => {
    updateFormData({ [field]: value });
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    onNext();
  };

  return (
    <div className="full max-w-lg relative z-10">
      <div className="text-slate-500 text-sm mb-2">Step {stepNumber}/{totalSteps}</div>
      <h1 className="text-3xl font-bold text-slate-800 mb-2">Your Role</h1>
      <p className="text-slate-600 mb-8 leading-relaxed">
        Define your role within the organization to access the right tools.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Role Selection */}
        <div>
          <label className="font-medium text-slate-700 text-sm mb-2 block">Role</label>
          <div className="flex flex-wrap gap-3">
            {roles.map((role) => (
              <Button
                key={role.value}
                type={formData.role === role.value ? 'primary' : 'default'}
                onClick={() => handleInputChange('role', role.value)}
                className={`rounded-lg px-5 py-2 border-2 transition-all duration-200 ${
                  formData.role === role.value
                    ? 'bg-blue-50 text-blue-600 border-blue-500'
                    : 'border-slate-200 text-slate-700 hover:border-blue-400'
                }`}
              >
                {role.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row justify-start gap-4 pt-8">
          <Button
            type="default"
            icon={<ArrowLeftOutlined />}
            onClick={onPrevious}
            className="w-full sm:w-auto px-8 py-3 border-2 border-slate-200 text-slate-600 font-semibold rounded-lg hover:bg-slate-50 hover:border-slate-300"
          >
            Back
          </Button>
          <Button
            type="primary"
            htmlType="submit"
            className="w-full sm:w-auto px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 hover:-translate-y-0.5 hover:shadow-lg"
          >
            Confirm
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Step3;
