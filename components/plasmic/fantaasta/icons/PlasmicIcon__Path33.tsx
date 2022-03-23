// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path33IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path33Icon(props: Path33IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 8 18"}
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
        clipRule={"evenodd"}
        d={"M7 2v14l-5.586-5.586a2 2 0 010-2.828L7 2z"}
        stroke={"currentColor"}
        strokeOpacity={".08"}
      ></path>
    </svg>
  );
}

export default Path33Icon;
/* prettier-ignore-end */
