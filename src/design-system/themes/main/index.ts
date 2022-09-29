import { radii, fontSizes, breakpoints, space } from '../../system';
import colors from './colors';
import buttons from './buttons';

const MainTheme = {
  radii,
  space,
  colors,
  buttons,
  fontSizes,
  breakpoints,
};

export type Theme = typeof MainTheme;

export default MainTheme;
