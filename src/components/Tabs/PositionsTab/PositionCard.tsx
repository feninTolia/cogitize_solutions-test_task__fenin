import React from 'react';

interface IProps {
  name: string;
  level: number;
  payment: number;
  tasks: number;
  onClick: () => void;
  className?: string;
}

const PositionCard = ({
  className = '',
  onClick,
  name,
  level,
  payment,
  tasks,
}: IProps) => {
  return (
    <li
      onClick={onClick}
      className={`flex  justify-between  items-start bg-[var(--secondary-black)] w-full pl-[4.4em] pr-[1.6em] pt-[2.2em] pb-[1.8em] rounded-[0.8em] ${className}`}
    >
      <div className="flex flex-col gap-[0.2em] dotted-bg">
        <span className=" text-[1.4em] font-semibold">{name}</span>
        <span className=" text-[1.2em] font-semibold text-[var(--main-gray)]">
          {level < 10 ? 'от 10 lvl' : `${tasks} заданий`}
        </span>
      </div>

      <span className=" text-[1.2em] font-medium text-[var(--main-gray)]">
        <span className="font-semibold text-[var(--main-yellow)]">
          ${payment}
        </span>{' '}
        / час
      </span>
    </li>
  );
};

export default PositionCard;
