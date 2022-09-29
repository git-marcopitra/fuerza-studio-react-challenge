import styled from '@emotion/styled';
import { css } from '@styled-system/css';
import {
  background,
  border,
  boxShadow,
  color,
  compose,
  flexbox,
  grid,
  layout,
  position,
  space,
  system,
  typography,
  variant,
} from 'styled-system';

import { ButtonProps } from './button.types';

const Button = styled.button<ButtonProps>(
  ({ hover, active }) =>
    css({
      ...(hover && { transition: 'all 250ms ease-in-out', '&:hover': hover }),
      ...(active && {
        transition: 'all 250ms ease-in-out',
        '&:active': active,
      }),
    }),
  compose(
    grid,
    space,
    color,
    border,
    layout,
    flexbox,
    position,
    boxShadow,
    typography,
    background,
    variant({ scale: 'buttons' }),
    system({
      cursor: true,
      rowGap: true,
      outline: true,
      columnGap: true,
      transform: true,
      transition: true,
      whiteSpace: true,
    })
  )
);

export default Button;
