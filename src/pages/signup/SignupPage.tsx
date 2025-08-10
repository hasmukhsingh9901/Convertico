import React from 'react'
import { Button, Layout, Space } from 'antd'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons'
import useFormStore from '../../store/formStore'
import ProgressBar from '../../components/ProgressBar/ProgressBar'
import Step1 from '../../components/StepForm/Step1'
import Step2 from '../../components/StepForm/Step2'
import Step3 from '../../components/StepForm/Step3'
import SuccessStep from '../../components/StepForm/SuccessStep'
import { validateStep1, validateStep2, validateStep3 } from '../../utils/validation'

const { Content } = Layout

const SignupPage: React.FC = () => {
  const {
    currentStep,
    updateFormErrors,
    nextStep,
    prevStep,
    getCurrentStepData,
  } = useFormStore()

  const handleNext = (): void => {
    const currentData = getCurrentStepData()
    let errors: Record<string, string> = {}

    switch (currentStep) {
      case 1:
        errors = validateStep1(currentData)
        break
      case 2:
        errors = validateStep2(currentData)
        break
      case 3:
        errors = validateStep3(currentData)
        break
      default:
        break
    }

    if (Object.keys(errors).length === 0) {
      updateFormErrors({})
      nextStep()
    } else {
      updateFormErrors(errors)
    }
  }

  const handleBack = (): void => {
    updateFormErrors({})
    prevStep()
  }

  const renderStep = (): React.ReactNode => {
    const stepProps = {
      formData: getCurrentStepData(),
      updateFormData: () => {},
      onNext: handleNext,
      onPrevious: handleBack,
      isFirstStep: currentStep === 1,
      isLastStep: currentStep === 3,
      stepNumber: currentStep,
      totalSteps: 3,
    };

    switch (currentStep) {
      case 1:
        return <Step1 {...stepProps} />
      case 2:
        return <Step2 {...stepProps} />
      case 3:
        return <Step3 {...stepProps} />
      case 4:
        return <SuccessStep formData={getCurrentStepData()} onPrevious={handleBack} />
      default:
        return <Step1 {...stepProps} />
    }
  }

  const isLastStep = currentStep === 3
  const isSuccessStep = currentStep === 4

  return (
    <Layout className="min-h-screen bg-white">
      <Content className="flex items-center justify-center p-4">
        <div className="w-full max-w-4xl bg-white rounded-lg shadow-xl p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Convertice</h1>
            <p className="text-gray-600">Create your account in just a few steps</p>
          </div>

          {/* Progress Bar */}
          {!isSuccessStep && <ProgressBar currentStep={currentStep} />}

          {/* Form Content */}
          <div className="mb-8">{renderStep()}</div>

          {/* Navigation Buttons */}
          {!isSuccessStep && (
            <div className="flex justify-between items-center">
              <Button
                size="large"
                icon={<ArrowLeftOutlined />}
                onClick={handleBack}
                disabled={currentStep === 1}
                className="flex items-center"
              >
                Back
              </Button>

              <Space>
                {isLastStep ? (
                  <Button
                    type="primary"
                    size="large"
                    icon={<ArrowRightOutlined />}
                    onClick={handleNext}
                    className="flex items-center"
                  >
                    Confirm
                  </Button>
                ) : (
                  <Button
                    type="primary"
                    size="large"
                    icon={<ArrowRightOutlined />}
                    onClick={handleNext}
                    className="flex items-center"
                  >
                    Next
                  </Button>
                )}
              </Space>
            </div>
          )}

          {/* Footer */}
          <div className="text-center mt-8 text-gray-500 text-sm">
            All rights reserved @convertice
          </div>
        </div>
      </Content>
    </Layout>
  )
}

export default SignupPage
