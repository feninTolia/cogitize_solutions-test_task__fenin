import React from 'react';
import PositionsList from './PositionsList';
import PositionsForm from './PositionsForm';

const PositionsTab = () => {
  return (
    <div className="flex gap-[1.6em] px-[4em] pb-[4em] pt-[2.4em] h-full">
      <PositionsList />
      <PositionsForm />
    </div>
  );
};

export default PositionsTab;
