import React, { PropsWithChildren } from 'react';

interface IProps extends PropsWithChildren {
  title: string;
}

const CheckboxGroup = ({ children, title }: IProps) => {
  return (
    <div className=" flex flex-col " style={{ gap: '0.4em' }}>
      <span className="text-[1.2em] text-[var(--main-gray)]">{title}</span>
      <div className=" flex flex-col" style={{ gap: '1em' }}>
        {children}
      </div>
    </div>
  );
};

export default CheckboxGroup;
