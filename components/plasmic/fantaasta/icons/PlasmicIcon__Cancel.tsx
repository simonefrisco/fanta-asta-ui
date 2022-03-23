// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CancelIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CancelIcon(props: CancelIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
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
          "M10 1.667A8.326 8.326 0 001.667 10 8.326 8.326 0 0010 18.333 8.326 8.326 0 0018.333 10 8.326 8.326 0 0010 1.667zm3.583 11.916a.83.83 0 01-1.175 0L10 11.175l-2.408 2.408a.83.83 0 11-1.175-1.175L8.825 10 6.417 7.592a.83.83 0 111.175-1.175L10 8.825l2.408-2.408a.83.83 0 111.175 1.175L11.175 10l2.408 2.408a.845.845 0 010 1.175z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CancelIcon;
/* prettier-ignore-end */
