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
} from 'styled-system';

import { TextAreaProps } from './text-area.types';

const TextArea = styled.textarea<TextAreaProps>(
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

export default TextArea;
