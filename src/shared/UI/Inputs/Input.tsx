import { IPosition } from '@/shared/lib/types';
import React, { Dispatch } from 'react';

interface IProps {
  value: string;
  setEditedPosition: Dispatch<React.SetStateAction<IPosition>>;
}

const Input = ({ value, setEditedPosition }: IProps) => {
  return (
    <label className=" bg-[var(--main-black)] w-full flex flex-col p-[1.6em] rounded-[0.8em]">
      <span className=" text-[1.2em] font-semibold text-[var(--main-gray)] mb-[0.4em]">
        Название
      </span>
      <input
        style={{ paddingInline: '1.1em' }}
        className="text-semibold  py-[1em] text-[1.4em] main-border  rounded-[0.8em] bg-[var(--main-black)]"
        type="text"
        value={value}
        onChange={(e) =>
          setEditedPosition((prev) => ({ ...prev, name: e.target.value }))
        }
      />
    </label>
  );
};

export default Input;
