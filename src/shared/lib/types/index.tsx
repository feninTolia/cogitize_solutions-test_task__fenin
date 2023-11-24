import { ButtonHTMLAttributes } from 'react';
import { Tabs } from '../constants';

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  titleFontSize?: string;
}

export interface ITabButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: Tabs;
  selectedTab: Tabs;
  titleFontSize?: string;
}

export interface IPosition {
  id: string;
  name: string;
  level: number;
  payment: number;
  tasks: number;
  duties: [];
}
