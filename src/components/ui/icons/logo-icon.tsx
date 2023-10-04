import React from "react";

export function LogoIcon({
  height,
  width,
  ...props
}: React.ComponentProps<"svg">) {
  return (
    <svg
      role="logo-icon"
      width={width || "33"}
      height={height || "34"}
      viewBox="0 0 33 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_121_1951)">
        <path
          d="M32.3502 21.354C32.3502 21.3638 32.3502 21.3735 32.3502 21.3832C32.3448 21.4102 32.3383 21.4372 32.3318 21.4642C31.2768 24.9959 29.0823 28.0796 26.0902 30.2345C23.0982 32.3893 19.4768 33.4943 15.7906 33.3772C12.1044 33.2601 8.56053 31.9274 5.71149 29.5869C2.86246 27.2465 0.868333 24.0297 0.0399879 20.4381C0.0108075 20.247 0 20.1422 0 20.1422C5.14547 27.8561 13.0944 26.7965 18.7975 23.1059C18.9056 23.0379 19.071 22.918 19.1715 22.8424C22.1187 20.652 24.2413 23.9408 20.1442 26.5049C19.0072 27.2167 18.2809 27.6033 17.0532 27.9846C25.4117 28.0321 28.8702 24.0488 30.6869 21.084C31.2154 20.2265 32.9079 19.1399 32.3502 21.354Z"
          fill="#D1D1E9"
        />
        <path
          d="M0.292882 12.0309C0.292882 12.0212 0.292882 12.0115 0.292882 12.0017C0.292882 11.9747 0.304771 11.9477 0.311255 11.9207C1.36657 8.3895 3.56122 5.30638 6.55312 3.15191C9.54502 0.997433 13.1661 -0.107339 16.8519 0.00978148C20.5377 0.126902 24.0813 1.45934 26.9302 3.7994C29.7791 6.13947 31.7733 9.3557 32.602 12.9468C32.6323 13.138 32.6431 13.2427 32.6431 13.2427C27.4976 5.52889 19.5487 6.58843 13.8444 10.279C13.7364 10.3471 13.5721 10.467 13.4705 10.5426C10.5244 12.733 8.40177 9.44414 12.4978 6.88005C13.6337 6.16829 14.36 5.7827 15.5888 5.40036C7.22808 5.35283 3.76858 9.33721 1.95292 12.3009C1.42767 13.1585 -0.264786 14.2461 0.292882 12.0309Z"
          fill="#6246EA"
        />
      </g>
      <defs>
        <clipPath id="clip0_121_1951">
          <rect
            width={width || "32.6431"}
            height={height || "33.385"}
            fill="white"
          />
        </clipPath>
      </defs>
    </svg>
  );
}