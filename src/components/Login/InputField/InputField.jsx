import { forwardRef } from 'react';
import styles from './InputField.module.css';

const InputField = forwardRef(function InputField(
  { value, onChange, placeholder, type = 'text' },
  ref
) {
  return (
    <div className={styles['input-wrapper']}>
      <input
        ref={ref}
        className={styles['input-field']}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
});

export default InputField;
