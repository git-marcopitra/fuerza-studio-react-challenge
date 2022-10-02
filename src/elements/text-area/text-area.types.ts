import { SystemStyleObject } from '@styled-system/css';
import { CSSProperties, TextareaHTMLAttributes } from 'react';
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

export interface TextAreaProps
  extends LayoutProps,
    PositionProps,
    TypographyProps,
    ColorProps,
    BackgroundProps,
    BoxShadowProps,
    BorderProps,
    SpaceProps,
    Omit<
      TextareaHTMLAttributes<HTMLTextAreaElement>,
      'color' | 'height' | 'size' | 'width'
    > {
  hover?: SystemStyleObject;
  active?: SystemStyleObject;
  cursor?: ResponsiveValue<CSSProperties['cursor']>;
  outline?: ResponsiveValue<CSSProperties['outline']>;
}
