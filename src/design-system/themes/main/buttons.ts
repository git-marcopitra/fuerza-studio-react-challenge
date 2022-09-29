import { css } from '@emotion/react';
import { fontSizes, radii, space } from '../../system';

import colors from './colors';

const primary = css`
  border: none;
  height: 65px;
  width: 183px;
  outline: none;
  cursor: pointer;
  position: relative;
  font-weight: bold;
  display: inline-block;
  border-radius: ${radii.S};
  text-transform: uppercase;
  font-size: ${fontSizes.button};
  color: ${colors.foreground};
  background: ${colors.accent};
  transition: all 0.3s ease-in-out;
  padding: ${space.L};
`;

const secondary = css`
  border: none;
  height: 45px;
  outline: none;
  cursor: pointer;
  position: relative;
  font-weight: bold;
  display: inline-block;
  border-radius: ${radii.S};
  text-transform: uppercase;
  font-size: ${fontSizes.button};
  color: ${colors.foreground};
  background: ${colors.text};
  transition: all 0.3s ease-in-out;
  padding-left: calc(${space.L} + ${space.S});
  padding-right: calc(${space.L} + ${space.S});
`;

export default {
  primary,
  secondary,
};
