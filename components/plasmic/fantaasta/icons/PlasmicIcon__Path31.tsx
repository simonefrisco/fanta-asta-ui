// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path31IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path31Icon(props: Path31IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 22 10"}
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
          "M0 0v7.647C0 8.947.985 10 2.2 10h17.6c1.215 0 2.2-1.054 2.2-2.353V0H0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path31Icon;
/* prettier-ignore-end */
