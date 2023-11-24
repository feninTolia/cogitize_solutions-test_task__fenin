import React from 'react';

interface IProps {
  name: string;
  level: number;
  payment: number;
  tasks: number;
}

const PositionCard = ({ name, level, payment, tasks }: IProps) => {
  return (
    <div>
      <span className=" text-[3em]">{name}</span>
      <span>{level}</span>
      <span>{tasks}</span>
      <span>${payment}/час</span>
    </div>
  );
};

export default PositionCard;
