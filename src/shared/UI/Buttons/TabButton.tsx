import React from 'react';
import Button from './Button';
import { ITabButton } from '@/shared/libs/types';

const TabButton = ({ className, selectedTab, title, ...attr }: ITabButton) => {
  return (
    <Button
      title={title}
      type="button"
      className={` w-[25.4em] py-[1.2em] border-x-2 border-t-2 border-[var(--main-border-clr)] rounded-t-[0.8em] border-b-2  bg-[var(--main-black)] ml-[-1.2em] transition-all ${
        selectedTab === title &&
        ' isolate z-10 shadow-[0px_4px_8px_0px_rgba(103,100,241,0.16)_inset] border-b-[var(--bg-border-clr)]'
      } ${className}`}
      {...attr}
    />
  );
};

export default TabButton;
