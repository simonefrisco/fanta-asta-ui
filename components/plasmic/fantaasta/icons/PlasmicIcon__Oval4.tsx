// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Oval4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Oval4Icon(props: Oval4IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 83 39"}
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
        opacity={".74"}
        d={"M77.467 16.861a47 47 0 00-70.03 18.203"}
        stroke={"currentColor"}
        strokeWidth={"16"}
      ></path>
    </svg>
  );
}

export default Oval4Icon;
/* prettier-ignore-end */
