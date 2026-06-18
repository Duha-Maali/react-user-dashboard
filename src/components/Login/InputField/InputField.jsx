import { forwardRef } from 'react';
import './InputField.css';

const InputField = forwardRef(function InputField(
  { value, onChange, placeholder, type = 'text' },
  ref
) {
  return (
    <div className="input-wrapper">
      <input
        ref={ref}
        className="input-field"
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
});

export default InputField;
