import Button from '@/shared/UI/Buttons/Button';
import { RootState } from '@/store';
import { editPosition } from '@/store/positions/positionsSlice';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

type Props = {};

const PositionsForm = (props: Props) => {
  const selectedPosition = useSelector(
    (state: RootState) => state.positions.selectedPosition
  );

  const dispatch = useDispatch();

  if (!selectedPosition) {
    return (
      <div className=" bg-[var(--secondary-black)] w-[59.2em] h-full rounded-[0.8em]"></div>
    );
  }

  return (
    <div className=" bg-[var(--secondary-black)] w-[59.2em] h-full rounded-[0.8em]">
      {JSON.stringify(selectedPosition)}
      <Button title="Сохранить" />
    </div>
  );
};

export default PositionsForm;
