import React from 'react';
import type { SuccessStepProps } from '../../types';


const SuccessStep: React.FC<SuccessStepProps> = ({ formData, onPrevious }) => {
  return (
    <div className="bg-white rounded-2xl p-10 shadow-xl w-full max-w-lg relative z-10">
      <div className="text-center">
        <div className="mb-6">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
            <circle cx="12" cy="12" r="10" fill="#10b981" stroke="#10b981" strokeWidth="2"/>
            <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        
        <h1 className="text-3xl font-bold text-slate-800 mb-2">Setup Complete!</h1>
        <p className="text-slate-600 mb-8 leading-relaxed">
          Thank you for completing your profile setup. Your account is now ready to use.
        </p>
        
        <div className="bg-slate-50 border-2 border-slate-200 rounded-xl p-6 mb-8 text-left">
          <h3 className="text-xl font-semibold text-slate-800 mb-4">Account Summary</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b border-slate-200 last:border-b-0">
              <span className="font-medium text-slate-600 text-sm">Name:</span>
              <span className="font-semibold text-slate-800 text-sm">{formData.firstName} {formData.lastName}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-slate-200 last:border-b-0">
              <span className="font-medium text-slate-600 text-sm">Email:</span>
              <span className="font-semibold text-slate-800 text-sm">{formData.email}</span>
            </div>
            {formData.companyName && (
              <div className="flex justify-between items-center py-2 border-b border-slate-200 last:border-b-0">
                <span className="font-medium text-slate-600 text-sm">Company:</span>
                <span className="font-semibold text-slate-800 text-sm">{formData.companyName}</span>
              </div>
            )}
            {formData.role && (
              <div className="flex justify-between items-center py-2 border-b border-slate-200 last:border-b-0">
                <span className="font-medium text-slate-600 text-sm">Role:</span>
                <span className="font-semibold text-slate-800 text-sm">{formData.role}</span>
              </div>
            )}
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-end gap-4">
          <button 
            type="button" 
            className="w-full sm:w-auto px-8 py-3 border-2 border-slate-200 text-slate-600 font-semibold rounded-lg text-base transition-all duration-300 hover:bg-slate-50 hover:border-slate-300"
            onClick={onPrevious}
          >
            Back to Edit
          </button>
          <button 
            type="button" 
            className="w-full sm:w-auto px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg text-base transition-all duration-300 hover:bg-blue-600 hover:transform hover:-translate-y-0.5 hover:shadow-lg"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessStep;
