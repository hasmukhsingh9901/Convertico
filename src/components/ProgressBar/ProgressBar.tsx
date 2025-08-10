import React from 'react'
import { Steps } from 'antd'
import { UserOutlined, BankOutlined, SettingOutlined } from '@ant-design/icons'

interface ProgressBarProps {
  currentStep: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep }) => {
  const steps = [
    {
      title: 'Personal Information',
      description: 'Your personal details',
      icon: <UserOutlined />,
    },
    {
      title: 'Company Details',
      description: 'Company information',
      icon: <BankOutlined />,
    },
    {
      title: 'Preferences',
      description: 'User role & terms',
      icon: <SettingOutlined />,
    },
  ]

  return (
    <div className="w-full max-w-md mx-auto mb-8">
      <Steps
        current={currentStep - 1}
        items={steps}
        responsive={true}
        size="small"
        className="custom-steps"
      />
    </div>
  )
}

export default ProgressBar
