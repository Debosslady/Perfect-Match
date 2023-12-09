import { SelectOptionFieldProps } from '@/hooks/types';
import Select from 'react-select';

const SelectOptionField = ({name, id, onChange, options, previousOption}:SelectOptionFieldProps) => {
  const selectOptions = options;

  const customStyles = {
    option: (provided:any, state:any) => ({
      ...provided,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      height: '100px !important'
    }),
  };

  const formatOptionLabel = ({ label}:any) => {
    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {label}
      </div>
    );
  };

  const selectedOption = selectOptions.find((options: { value: any; }) => options.value === previousOption);
  return (
    <Select
      id={id}
      name={name}
      options={selectOptions}
      components={{
        Option: ({ innerProps, label, data }) => (
          <div {...innerProps} className="px-3">
            {label}
          </div>
        ),
      }}
      styles={customStyles}
      value={selectedOption}
      onChange={(selectedOption) => {
        if (selectedOption) {
          const selectedOptionValue = selectedOption.value;
          onChange(selectedOptionValue);
        } else {
          const selectedOptionValue = "";
          onChange(selectedOptionValue);
        }
      }}
      formatOptionLabel={formatOptionLabel}
    />
  );
};

export default SelectOptionField;
