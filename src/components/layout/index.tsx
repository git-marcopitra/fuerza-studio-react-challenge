import React, { FC } from 'react';
import { Box } from '../../elements';
import { BackgroundSVG, LogoSVG } from '../svg';
import { LayoutProps } from './layout.types';

const Layout: FC<LayoutProps> = ({ bigHeader, children }) => (
  <>
    <Box position="fixed" height="100vh" py="5vh">
      <BackgroundSVG height="100%" />
    </Box>
    <Box
      p="XL"
      display="flex"
      bg="background"
      minHeight="100vh"
      flexDirection="column"
    >
      <Box as="header" mt={bigHeader ? '25vh' : 'unset'}>
        <Box height={bigHeader ? '2.5rem' : '1.8rem'}>
          <LogoSVG height="100%" />
        </Box>
      </Box>
      <Box as="main">{children}</Box>
    </Box>
  </>
);

export default Layout;
