// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path11IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path11Icon(props: Path11IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 9 10"}
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
          "M4.152 2.112C6.725-.747 8.887.125 8.887.125s.786 2.402-1.788 5.26C4.526 8.243.36 10.32.035 9.959c-.315-.35 1.544-4.99 4.117-7.847z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path11Icon;
/* prettier-ignore-end */
