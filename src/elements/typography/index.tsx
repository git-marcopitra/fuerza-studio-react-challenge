import styled from '@emotion/styled';
import { css } from '@styled-system/css';
import React, { FC } from 'react';
import {
  border,
  boxShadow,
  color,
  compose,
  flexbox,
  layout,
  position,
  space,
  system,
  textShadow,
  typography,
} from 'styled-system';

import { TypographyProps } from './typography.types';

const Typography: FC<TypographyProps> = ({ as, hover, active, ...props }) => {
  const TypographyElement = styled(as || 'p')(
    css({
      ...(hover && { transition: 'all 250ms ease-in-out', '&:hover': hover }),
      ...(active && { '&:active': active }),
    }),
    compose(
      space,
      color,
      layout,
      border,
      flexbox,
      position,
      boxShadow,
      typography,
      textShadow,
      system({
        cursor: true,
        whiteSpace: true,
        textTransform: true,
        textDecoration: true,
      })
    )
  );

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return <TypographyElement {...props} />;
};

export default Typography;
