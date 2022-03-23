// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Tableborderhorizontal3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Tableborderhorizontal3Icon(
  props: Tableborderhorizontal3IconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 197 1"}
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

      <path stroke={"currentColor"} d={"M197 .5H0"}></path>
    </svg>
  );
}

export default Tableborderhorizontal3Icon;
/* prettier-ignore-end */
