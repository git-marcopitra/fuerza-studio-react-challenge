import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Routes, ROUTES } from '../../constants';
import { Box } from '../../elements';
import { BackgroundSVG, LogoSVG } from '../svg';
import { LayoutProps } from './layout.types';

const Layout: FC<LayoutProps> = ({ bigHeader, children, headerButton }) => (
  <>
    <Box
      py="5vh"
      zIndex="-1"
      width="100vw"
      height="100vh"
      bg="background"
      position="fixed"
    >
      <BackgroundSVG height="100%" />
    </Box>
    <Box p="XL" display="flex" minHeight="100vh" flexDirection="column">
      <Box
        as="header"
        display="flex"
        justifyContent="space-between"
        mt={bigHeader ? '25vh' : 'unset'}
      >
        <Link to={ROUTES[Routes.ListJournal
        ]}>
          <Box height={bigHeader ? '2.5rem' : '1.8rem'}>
            <LogoSVG height="100%" />
          </Box>
        </Link>
        {headerButton}
      </Box>
      <Box as="main" flex="1">
        {children}
      </Box>
    </Box>
  </>
);

export default Layout;
