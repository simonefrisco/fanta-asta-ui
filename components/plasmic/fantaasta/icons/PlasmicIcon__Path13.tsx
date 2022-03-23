// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path13IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path13Icon(props: Path13IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 15"}
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
          "M10.11 11.793C6.172 16.01.135 14.856.135 14.856s-1.078-6.463 2.86-10.68C6.933-.041 12.9-.49 13.684.35c.76.813.365 7.227-3.574 11.443z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path13Icon;
/* prettier-ignore-end */
