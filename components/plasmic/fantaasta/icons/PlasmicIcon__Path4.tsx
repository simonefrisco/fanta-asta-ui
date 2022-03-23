// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path4Icon(props: Path4IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 10 15"}
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
        opacity={".06"}
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={"M0 14.063L5.276 0l4.287 4.493L0 14.063z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path4Icon;
/* prettier-ignore-end */
