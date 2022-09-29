import { SystemStyleObject } from '@styled-system/css';
import { CSSProperties, ButtonHTMLAttributes } from 'react';
import {
  BackgroundProps,
  BorderProps,
  BoxShadowProps,
  ColorProps,
  LayoutProps,
  PositionProps,
  ResponsiveValue,
  SpaceProps,
  TypographyProps,
} from 'styled-system';
import { Theme } from '../../design-system/themes/main';

export interface ButtonProps
  extends LayoutProps,
    PositionProps,
    TypographyProps,
    ColorProps,
    BackgroundProps,
    BoxShadowProps,
    BorderProps,
    SpaceProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'> {
  hover?: SystemStyleObject;
  active?: SystemStyleObject;
  variant: keyof Theme['buttons'];
  cursor?: ResponsiveValue<CSSProperties['cursor']>;
  outline?: ResponsiveValue<CSSProperties['outline']>;
}
