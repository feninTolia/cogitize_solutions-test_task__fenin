import TabButton from '@/shared/UI/Buttons/TabButton';
import { Tabs } from '@/shared/lib/constants';
import React from 'react';

interface IProps {
  selectedTab: Tabs;
  setSelectedTab: React.Dispatch<React.SetStateAction<Tabs>>;
}

const TabControls = ({ selectedTab, setSelectedTab }: IProps) => {
  return (
    <div className=" w-full">
      <TabButton
        title={Tabs.Hierarchy}
        selectedTab={selectedTab}
        onClick={() => setSelectedTab(Tabs.Hierarchy)}
        style={{ marginLeft: 0 }}
      />
      <TabButton
        title={Tabs.Positions}
        selectedTab={selectedTab}
        onClick={() => setSelectedTab(Tabs.Positions)}
      />

      <TabButton
        title={Tabs.StaffList}
        selectedTab={selectedTab}
        onClick={() => setSelectedTab(Tabs.StaffList)}
      />

      <TabButton
        title={Tabs.EquipmentSet}
        selectedTab={selectedTab}
        onClick={() => setSelectedTab(Tabs.EquipmentSet)}
      />
    </div>
  );
};

export default TabControls;
