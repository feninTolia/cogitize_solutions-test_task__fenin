import { Tabs } from '@/shared/lib/constants';
import React from 'react';

const StaffListTab = () => {
  return (
    <div className=" h-full flex justify-center items-center">
      <span className=" text-3xl">{Tabs.StaffList}</span>
    </div>
  );
};

export default StaffListTab;
