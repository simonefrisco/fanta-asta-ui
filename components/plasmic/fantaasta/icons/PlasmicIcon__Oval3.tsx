// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Oval3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Oval3Icon(props: Oval3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 88 109"}
      height={"1em"}
      width={"1em"}
      style={{
        stroke: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        opacity={".4"}
        d={"M82.467 16.861a47 47 0 10-36.534 84.256"}
        stroke={"currentColor"}
        strokeWidth={"16"}
      ></path>
    </svg>
  );
}

export default Oval3Icon;
/* prettier-ignore-end */
