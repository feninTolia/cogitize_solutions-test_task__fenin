import React from 'react';
import PositionCard from './PositionCard';

interface IPosition {
  id: string;
  name: string;
  level: number;
  payment: number;
  tasks: number;
}
const PositionsList = () => {
  const positions: IPosition[] = [
    { id: '1', name: 'Новобранец', level: 0, payment: 50, tasks: 0 },
    { id: '2', name: 'Рядовой', level: 10, payment: 80, tasks: 5 },
  ];

  return (
    <div className=" w-[29.6em] bg-black flex flex-col gap-[2em]">
      {positions.map((position) => (
        <PositionCard key={position.id} {...position} />
      ))}
    </div>
  );
};

export default PositionsList;
