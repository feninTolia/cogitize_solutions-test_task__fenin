import { Tabs } from '@/shared/libs/constants';
import React from 'react';
import StaffListTab from './StaffListTab';
import HierarchyTab from './HierarchyTab';
import EquipmentSetTab from './EquipmentSetTab';
import PositionsTab from './PositionsTab/PositionsTab';

interface IProps {
  selectedTab: Tabs;
}

const TabsPage = ({ selectedTab }: IProps) => {
  let content;

  if (selectedTab === Tabs.Hierarchy) {
    content = <HierarchyTab />;
  }
  if (selectedTab === Tabs.EquipmentSet) {
    content = <EquipmentSetTab />;
  }

  if (selectedTab === Tabs.StaffList) {
    content = <StaffListTab />;
  }
  if (selectedTab === Tabs.Positions) {
    content = <PositionsTab />;
  }
  return (
    <div className="w-full h-[calc(100%-4.9em)] border-b-2 border-x-2 border-[var(--main-border-clr)] rounded-b-[0.8em]">
      {content}
    </div>
  );
};

export default TabsPage;
