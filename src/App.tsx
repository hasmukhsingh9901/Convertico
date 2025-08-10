import React from 'react';
import Step1 from './components/StepForm/Step1';
import Step2 from './components/StepForm/Step2';
import Step3 from './components/StepForm/Step3';
import SuccessStep from './components/StepForm/SuccessStep';
import { Steps } from 'antd'; 
import { ScheduleOutlined, UserAddOutlined, UserOutlined } from '@ant-design/icons';
import useFormStore from './store/formStore';

function App() {
  const { 
    formData, 
    currentStep, 
    nextStep, 
    prevStep, 
    updateFormData,
    goToStep 
  } = useFormStore();

  const steps = [
    {
      id: 1,
      title: <h3 className='text-white font-nata-sans'>Your personal details</h3>,
      subtitle: <p className='text-white/60'>Personal details of user</p>,
      icon: <div className='h-8 w-8 rounded-full border bg-white border-white flex items-center justify-center'><UserOutlined /></div>,
      component: Step1
    },
    {
      id: 2,
      title: <h3 className="text-white">Your company details</h3>,
      subtitle: <p className="text-white/60">Company's basic information</p>,
      icon: <div className='h-8 w-8 rounded-full border bg-white border-white flex items-center justify-center'><ScheduleOutlined /></div>,
      component: Step2
    },
    {
      id: 3,
      title: <h3 className="text-white">Your role</h3>,
      subtitle: <p className="text-white/60">User role in the platform</p>,
      icon: <div className='h-8 w-8 rounded-full border bg-white border-white flex items-center justify-center'> <UserAddOutlined /> </div>,
      component: Step3
    }
  ];

  const handleNext = (): void => {
    if (currentStep < steps.length) {
      nextStep();
    } else {
      goToStep(steps.length + 1);
    }
  };

  const handlePrevious = (): void => {
    if (currentStep > 1) {
      prevStep();
    }
  };

  const updateFormDataHandler = (newData: any): void => {
    updateFormData(newData);
  };

  const renderCurrentStep = (): React.ReactNode => {
    if (currentStep > steps.length) {
      return (
        <SuccessStep 
          formData={formData}
          onPrevious={() => goToStep(steps.length)}
        />
      );
    }
    
    const currentStepData = steps[currentStep - 1];
    const StepComponent = currentStepData.component;
    
    return (
      <StepComponent 
        formData={formData}
        updateFormData={updateFormDataHandler}
        onNext={handleNext}
        onPrevious={handlePrevious}
        isFirstStep={currentStep === 1}
        isLastStep={currentStep === steps.length}
        stepNumber={currentStep}
        totalSteps={steps.length}
      />
    );
  };

  return (
    <div className="flex min-h-screen font-sans bg-white">
      
      {/* Sidebar with Ant Design Steps */}
      <div className="w-96 bg-gradient-to-br from-blue-800 to-blue-900 text-white p-8 flex flex-col relative overflow-hidden lg:block hidden">
        {/* Header */}
        <div className="relative z-10 mb-12">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-800 font-bold text-xl">
              C
            </div>
            <span className="text-2xl font-semibold">Convertico</span>
          </div>
        </div>
        
        {/* Ant Design Steps Component */}
        <div className="relative z-10 flex-1">
          <Steps
            current={currentStep - 1} 
            onChange={(step: number) => goToStep(step + 1)} 
            direction="vertical"
            items={steps.map((step) => ({
              title: step.title,
              description: step.subtitle,
              icon: <span className="text-xl">{step.icon}</span> 
            }))}
          />
        </div>
        
        {/* Footer */}
        <div className="relative z-10 mt-auto text-xs text-white text-opacity-60">
          <p>All rights reserved @Convertico</p>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 bg-gradient-to-br from-slate-50 to-slate-200 p-6 lg:p-12 flex items-center justify-center relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-50">
          <svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
              <g fill="#cbd5e1" fillOpacity="0.1">
                <circle cx="30" cy="30" r="4"/>
              </g>
            </g>
          </svg>
        </div>
        
        {/* Form Content */}
        <div className="relative z-10 w-full max-w-lg px-4 lg:px-0">
          {renderCurrentStep()}
        </div>
      </div>
    </div>
  );
}

export default App;
