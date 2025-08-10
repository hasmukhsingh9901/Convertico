import { create } from 'zustand'
import type { FormData } from '../types'

interface FormStore {
  formData: FormData
  currentStep: number
  formErrors: Record<string, string>
  updateFormData: (updates: Partial<FormData>) => void
  nextStep: () => void
  prevStep: () => void
  goToStep: (step: number) => void
  resetForm: () => void
  setFormErrors: (errors: Record<string, string>) => void
  updateFormErrors: (errors: Record<string, string>) => void
  getCurrentStepData: () => Record<string, any>
}

const useFormStore = create<FormStore>((set, get) => ({
  formData: {
    firstName: '',
    lastName: '',
    email: '',
    mobile: '+91',
    mobileNumber: '',
    companyName: '',
    companySize: '',
    industry: '',
    role: '',
    department: ''
  },
  
  currentStep: 1,
  
  formErrors: {},
  
  updateFormData: (updates) => {
    set((state) => ({
      formData: {
        ...state.formData,
        ...updates,
      },
    }))
  },
  
  nextStep: () => {
    set((state) => ({
      currentStep: Math.min(state.currentStep + 1, 3),
    }))
  },
  
  prevStep: () => {
    set((state) => ({
      currentStep: Math.max(state.currentStep - 1, 1),
    }))
  },
  
  goToStep: (step) => {
    set({ currentStep: step })
  },
  
  resetForm: () => {
    set({
      formData: {
        firstName: '',
        lastName: '',
        email: '',
        mobile: '+91',
        mobileNumber: '',
        companyName: '',
        companySize: '',
        industry: '',
        role: '',
        department: ''
      },
      currentStep: 1,
      formErrors: {},
    })
  },
  
  setFormErrors: (errors) => {
    set({ formErrors: errors })
  },

  updateFormErrors: (errors) => {
    set({ formErrors: errors })
  },

  getCurrentStepData: () => {
    const { formData, currentStep } = get()
    switch (currentStep) {
      case 1:
        return {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          mobileNumber: formData.mobileNumber,
        }
      case 2:
        return {
          companyName: formData.companyName,
          companySize: formData.companySize,
          industry: formData.industry,
        }
      case 3:
        return {
          role: formData.role,
          department: formData.department,
        }
      default:
        return {}
    }
  }
}))

export default useFormStore
