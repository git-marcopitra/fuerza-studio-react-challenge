import { css } from '@emotion/react';
import { fontSizes, space } from '../../system';

import colors from './colors';

const primary = css`
  border: none;
  outline: none;
  cursor: pointer;
  min-width: 160px;
  font-weight: bold;
  position: relative;
  padding: ${space.L};
  display: inline-block;
  border-radius: 1.6rem;
  color: ${colors.foreground};
  background: ${colors.accent};
  font-size: ${fontSizes.button};
  transition: all 0.3s ease-in-out;
`;

const secondary = css`
  outline: none;
  cursor: pointer;
  font-weight: bold;
  position: relative;
  display: inline-block;
  border-radius: 1.6rem;
  background: transparent;
  color: ${colors.accent};
  padding: ${space.M} ${space.L};
  font-size: ${fontSizes.button};
  transition: all 0.3s ease-in-out;
  border: 1px solid ${colors.accent};
`;

export default {
  primary,
  secondary,
};
