import React from 'react';
import PositionCard from './PositionCard';
import Button from '@/shared/UI/Buttons/Button';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import {
  addPosition,
  setSelectedPosition,
} from '@/store/positions/positionsSlice';

const PositionsList = () => {
  const positions = useSelector(
    (state: RootState) => state.positions.positions
  );
  const selectedPosition = useSelector(
    (state: RootState) => state.positions.selectedPosition
  );
  const dispatch = useDispatch();

  let content;

  if (!positions) {
    content = <div></div>;
  }

  if (positions) {
    content = positions?.map((position) => (
      <PositionCard
        key={position.id}
        {...position}
        onClick={() => dispatch(setSelectedPosition(position))}
        className={
          selectedPosition?.id === position.id ? ' box-shadow-border' : ''
        }
      />
    ));
  }

  console.log('positions', positions);

  return (
    <div className=" w-[29.6em] flex flex-col  justify-between pb-[1.6em]">
      <ul className=" flex flex-col gap-[2em] overflow-scroll mb-[1.6em]">
        {positions?.map((position) => (
          <PositionCard
            key={position.id}
            {...position}
            onClick={() => dispatch(setSelectedPosition(position))}
            className={
              selectedPosition?.id === position.id ? ' box-shadow-border' : ''
            }
          />
        ))}
      </ul>
      <Button
        title="Создать новую должность"
        onClick={() => dispatch(addPosition())}
      />
    </div>
  );
};

export default PositionsList;
