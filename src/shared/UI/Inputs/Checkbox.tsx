import { CheckboxNames, CheckboxTitles } from '@/shared/lib/constants';
import { IPosition } from '@/shared/lib/types';
import React, { Dispatch } from 'react';

interface IProps {
  checked: boolean;
  setEditedPosition: Dispatch<React.SetStateAction<IPosition>>;
  checkboxName: CheckboxNames;
}

const Checkbox = ({ checkboxName, checked, setEditedPosition }: IProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedPosition((prevState) => {
      return {
        ...prevState,
        dutiesCheckbox: {
          ...prevState.dutiesCheckbox,
          [checkboxName]: e.target.checked,
        },
      };
    });
  };

  return (
    <label className="custom-checkbox">
      <input
        className="checkbox"
        type="checkbox"
        checked={checked}
        onChange={handleChange}
      />
      <span className="checkmark"></span>

      <span className=" text-[1.2em] font-medium">
        {CheckboxTitles[checkboxName]}
      </span>
    </label>
  );
};

export default Checkbox;
