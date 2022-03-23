// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path27IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path27Icon(props: Path27IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2 6"}
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
        d={"M2 5a1 1 0 01-2 0V1a1 1 0 012 0v4z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path27Icon;
/* prettier-ignore-end */
