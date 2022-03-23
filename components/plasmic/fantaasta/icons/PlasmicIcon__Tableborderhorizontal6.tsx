// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Tableborderhorizontal6IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Tableborderhorizontal6Icon(
  props: Tableborderhorizontal6IconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 120 1"}
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

      <path stroke={"currentColor"} d={"M120 .5H0"}></path>
    </svg>
  );
}

export default Tableborderhorizontal6Icon;
/* prettier-ignore-end */
