import React, { ButtonHTMLAttributes } from 'react';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  titleFontSize?: string;
}

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
