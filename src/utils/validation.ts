// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Phone validation regex (basic)
const PHONE_REGEX = /^\+?[\d\s\-\(\)]{10,}$/

export const validateEmail = (email: string): string | null => {
  if (!email) return 'Email is required'
  if (!EMAIL_REGEX.test(email)) return 'Please enter a valid email address'
  return null
}

export const validatePhone = (phone: string): string | null => {
  if (!phone) return 'Phone number is required'
  if (!PHONE_REGEX.test(phone)) return 'Please enter a valid phone number'
  return null
}

export const validateRequired = (value: string, fieldName: string): string | null => {
  if (!value || value.trim() === '') {
    return `${fieldName} is required`
  }
  return null
}



export const validateStep1 = (data: any): Record<string, string> => {
  const errors: Record<string, string> = {}
  
  const firstNameError = validateRequired(data.firstName, 'First name')
  if (firstNameError) errors.firstName = firstNameError
  
  const lastNameError = validateRequired(data.lastName, 'Last name')
  if (lastNameError) errors.lastName = lastNameError
  
  const emailError = validateEmail(data.email)
  if (emailError) errors.email = emailError
  
  const phoneError = validatePhone(data.phoneNumber)
  if (phoneError) errors.phoneNumber = phoneError
  
  return errors
}

export const validateStep2 = (data: any): Record<string, string> => {
  const errors: Record<string, string> = {}
  
  const companyNameError = validateRequired(data.companyName, 'Company name')
  if (companyNameError) errors.companyName = companyNameError
  
  const teamSizeError = validateRequired(data.teamSize, 'Team size')
  if (teamSizeError) errors.teamSize = teamSizeError
  
  const industryError = validateRequired(data.industry, 'Industry')
  if (industryError) errors.industry = industryError
  
  return errors
}

export const validateStep3 = (data: any): Record<string, string> => {
  const errors: Record<string, string> = {}
  
  const userRoleError = validateRequired(data.userRole, 'User role')
  if (userRoleError) errors.userRole = userRoleError
  
  if (!data.termsAgreement) {
    errors.termsAgreement = 'You must agree to the terms and conditions'
  }
  
  return errors
}

export const isStepValid = (step: number, data: any): boolean => {
  let errors: Record<string, string> = {}
  
  switch (step) {
    case 1:
      errors = validateStep1(data)
      break
    case 2:
      errors = validateStep2(data)
      break
    case 3:
      errors = validateStep3(data)
      break
    default:
      return false
  }
  
  return Object.keys(errors).length === 0
}
