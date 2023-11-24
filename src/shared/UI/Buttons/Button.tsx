import { IButton } from '@/shared/libs/types';
import React from 'react';

const Button = ({
  title,
  type = 'button',
  titleFontSize = 'text-[1.4em]',
  ...attr
}: IButton) => {
  return (
    <button type={type} {...attr}>
      <span className={titleFontSize}>{title}</span>
    </button>
  );
};

export default Button;
