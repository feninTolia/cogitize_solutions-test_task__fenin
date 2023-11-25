import { CheckboxNames, CheckboxTitles } from '@/shared/lib/constants';
import { IPosition } from '@/shared/lib/types';
import React, { Dispatch } from 'react';

interface IProps {
  checked: boolean;
  setEditedPosition: Dispatch<React.SetStateAction<IPosition>>;
  checkboxName: CheckboxNames;
}

const Checkbox = ({ checkboxName, checked, setEditedPosition }: IProps) => {
  const handleChange = () => {
    setEditedPosition((prevState) => {
      return {
        ...prevState,
        dutiesCheckbox: {
          ...prevState.dutiesCheckbox,
          [checkboxName]: true,
        },
      };
    });
  };

  return (
    <label>
      <input type="checkbox" checked={checked} onChange={handleChange} />
      <span className=" text-[1.2em]">{CheckboxTitles[checkboxName]}</span>
    </label>
  );
};

export default Checkbox;
