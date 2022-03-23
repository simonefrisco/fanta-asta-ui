// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path19IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path19Icon(props: Path19IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2 14"}
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
          "M2 12.923C2 13.518 1.552 14 1 14s-1-.482-1-1.077V1.077C0 .482.448 0 1 0s1 .482 1 1.077v11.846z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path19Icon;
/* prettier-ignore-end */
