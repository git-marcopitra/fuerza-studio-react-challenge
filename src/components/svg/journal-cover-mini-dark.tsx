import React, { FC, SVGAttributes } from 'react';

const JournalCoverMini: FC<SVGAttributes<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 145 201" fill="none" {...props}>
    <g filter="url(#filter0_i_5_789)">
      <mask
        id="mask0_5_789"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="145"
        height="201"
      >
        <path
          d="M0 1.99999C0 0.895425 0.895431 0 2 0H128.922C137.758 0 144.922 7.16344 144.922 16V185C144.922 193.837 137.758 201 128.922 201H2C0.89543 201 0 200.105 0 199V1.99999Z"
          fill="#C4C4C4"
        />
      </mask>
      <g mask="url(#mask0_5_789)">
        <rect
          x="-3.76874"
          y="-6.28119"
          width="157.659"
          height="214.191"
          fill="#3B4E8D"
        />
        <g filter="url(#filter1_d_5_789)">
          <path
            d="M0 1.99999C0 0.895425 0.89543 0 2 0H11.3062V201H2C0.895432 201 0 200.105 0 199V1.99999Z"
            fill="#5091D6"
          />
        </g>
      </g>
    </g>
    <defs>
      <filter
        id="filter0_i_5_789"
        x="-2"
        y="-2"
        width="146.922"
        height="203"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="-2" dy="-2" />
        <feGaussianBlur stdDeviation="1" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="multiply"
          in2="shape"
          result="effect1_innerShadow_5_789"
        />
      </filter>
      <filter
        id="filter1_d_5_789"
        x="-4"
        y="0"
        width="19.3063"
        height="209"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_5_789"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_5_789"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default JournalCoverMini;
