import React from 'react';
import { ITabButton } from '@/shared/lib/types';

const TabButton = ({
  titleFontSize = 'text-[1.4em]',
  className = '',
  selectedTab,
  title,
  ...attr
}: ITabButton) => {
  return (
    <button
      type="button"
      className={` tab-button 
      ${selectedTab === title ? 'tab-button--selected ' : ''} `}
      {...attr}
    >
      <span className={titleFontSize}>{title}</span>
    </button>
  );
};

export default TabButton;
