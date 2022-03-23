// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path32IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path32Icon(props: Path32IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 22 5"}
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
          "M22 2.222A2.211 2.211 0 0019.8 0H2.2C.985 0 0 .995 0 2.222V5h22V2.222z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path32Icon;
/* prettier-ignore-end */
