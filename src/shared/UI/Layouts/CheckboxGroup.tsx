import React, { PropsWithChildren } from 'react';

interface IProps extends PropsWithChildren {
  title: string;
}

const CheckboxGroup = ({ children, title }: IProps) => {
  return (
    <div className=" flex flex-col gap-6">
      <span className="text-[1.2em] text-[var(--main-gray)]">{title}</span>
      {children}
    </div>
  );
};

export default CheckboxGroup;
