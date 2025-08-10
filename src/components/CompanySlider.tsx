import React, { useState } from 'react';
import { Radio } from 'antd';

const CompanySizeSelector: React.FC = () => {
  const [value, setValue] = useState<string>('small');

  const onChange = (e: any): void => {
    setValue(e.target.value);
  };

  return (
    <div className="company-size-wrapper">
      
      <Radio.Group onChange={onChange} value={value} className="company-size-group">
        <Radio.Button value="small">Small</Radio.Button>
        <Radio.Button value="medium">Medium</Radio.Button>
        <Radio.Button value="large">Large</Radio.Button>
      </Radio.Group>
    </div>
  );
};

export default CompanySizeSelector;
