import { RadioButtonProps } from '@/hooks/types';

const RadioButton = ({ name, value, checked, ...props }:RadioButtonProps) => {
  return (
    <input type="radio" name={name} value={value} defaultChecked={checked} {...props} />
  );
};

export default RadioButton;