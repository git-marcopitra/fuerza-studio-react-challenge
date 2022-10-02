import React, { FC, SVGAttributes } from 'react';

const Plus: FC<SVGAttributes<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 12 12" fill="none" {...props}>
    <path
      d="M6.91915 5.13223H12V6.89256H6.91915V12H5.08085V6.89256H0V5.13223H5.08085V0H6.91915V5.13223Z"
      fill="currentColor"
    />
  </svg>
);

export default Plus;
