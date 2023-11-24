import { IButton } from '@/shared/lib/types';
import React from 'react';

const Button = ({
  title,
  className = '',
  type = 'button',
  titleFontSize = 'text-[1.4em]',
  ...attr
}: IButton) => {
  return (
    <button type={type} className={`primary-button ${className}`} {...attr}>
      <span className={titleFontSize}>{title}</span>
    </button>
  );
};

export default Button;
