// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask49IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask49Icon(props: Mask49IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 20"}
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
          "M4 5c0-2.8 2.2-5 5-5s5 2.2 5 5-2.2 5-5 5-5-2.2-5-5zm14 12v2c0 .6-.4 1-1 1s-1-.4-1-1v-2c0-1.7-1.3-3-3-3H5c-1.7 0-3 1.3-3 3v2c0 .6-.4 1-1 1s-1-.4-1-1v-2c0-2.8 2.2-5 5-5h8c2.8 0 5 2.2 5 5zM9 8C7.3 8 6 6.7 6 5s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Mask49Icon;
/* prettier-ignore-end */
