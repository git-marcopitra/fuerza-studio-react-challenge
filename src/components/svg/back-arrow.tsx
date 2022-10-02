import React, { FC, SVGAttributes } from 'react';

const BackArrow: FC<SVGAttributes<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 10 18" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.45229 0.235718C9.14235 -0.0786151 8.63515 -0.0785668 8.32527 0.235827L1.11079 7.55543L1.10728 7.55187L0 8.6759L0.00320073 8.67915L0 8.6824L1.11128 9.80943L1.1143 9.80636L8.29805 17.0943C8.60695 17.4077 9.11256 17.4077 9.42143 17.0943C9.72404 16.7872 9.72403 16.2941 9.4214 15.987L2.22185 8.68267L9.4524 1.34677C9.75609 1.03866 9.75604 0.543772 9.45229 0.235718Z"
      fill="#333438"
    />
  </svg>
);

export default BackArrow;
