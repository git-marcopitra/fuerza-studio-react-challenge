import React, { FC } from 'react';
import { Box } from '../../elements';

const Layout: FC = ({ children }) => (
  <>
    <Box as="header"></Box>
    <Box as="main">{children}</Box>
  </>
);

export default Layout;
