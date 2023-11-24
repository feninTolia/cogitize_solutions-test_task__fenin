'use client';
import { Tabs } from '@/shared/lib/constants';
import React, { useState } from 'react';
import TabControls from './TabControls';
import TabsPage from './Tabs/Tabs';

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState<Tabs>(Tabs.Positions);

  return (
    <div className=" w-[103.4em] h-[83.6em] bg-[var(--main-black)] mx-auto main-border rounded-[0.8em] px-[2.5em] py-[2.4em]">
      <TabControls selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <TabsPage selectedTab={selectedTab} />
    </div>
  );
};

export default Dashboard;
