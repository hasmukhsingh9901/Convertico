export interface FormData {
  firstName?: string;
  lastName?: string;
  email?: string;
  mobile?: string;
  mobileNumber?: string;
  companyName?: string;
  companySize?: string;
  industry?: string;
  role?: string;
  department?: string;
  [key: string]: any;
}

export interface StepProps {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
  onNext: () => void;
  onPrevious: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
  stepNumber: number;
  totalSteps: number;
}

export interface Step {
  id: number;
  title: React.ReactNode;
  subtitle: React.ReactNode;
  icon: React.ReactNode;
  component: React.ComponentType<StepProps>;
}

export interface SuccessStepProps {
  formData: FormData;
  onPrevious: () => void;
}
