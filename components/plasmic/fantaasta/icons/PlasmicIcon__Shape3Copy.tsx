// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Shape3CopyIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Shape3CopyIcon(props: Shape3CopyIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 10 13"}
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
        d={"M0 12.375L6.512 0l3.05 3.074L0 12.375z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Shape3CopyIcon;
/* prettier-ignore-end */
