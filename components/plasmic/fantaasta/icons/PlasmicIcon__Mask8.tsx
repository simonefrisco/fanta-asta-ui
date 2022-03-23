// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask8IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask8Icon(props: Mask8IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 17 18"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M9.225.225l6 3C16.05 3.6 16.5 4.35 16.5 5.175V12.3c0 .9-.525 1.65-1.275 2.025l-6 3c-.3.15-.6.225-.975.225-.3 0-.675-.075-.975-.225l-6-3C.45 13.95 0 13.125 0 12.3V5.175C0 4.35.45 3.6 1.2 3.225l6-3c.675-.3 1.425-.3 2.025 0zm-.975 1.2c-.075 0-.225 0-.3.075L2.4 4.275 8.25 7.2l5.85-2.925L8.55 1.5c-.075-.075-.15-.075-.3-.075zM1.875 13.05a.895.895 0 01-.375-.675v-6.9l6 3v7.35L1.875 13.05zM9 15.825l5.55-2.775c.3-.15.45-.375.45-.675v-6.9l-6 3v7.35z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Mask8Icon;
/* prettier-ignore-end */
