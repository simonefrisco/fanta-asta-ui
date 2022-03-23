// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PathIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PathIcon(props: PathIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 6 6"}
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
        d={
          "M2.8 2.234L.683.117a.4.4 0 00-.566.566L2.234 2.8.117 4.917a.4.4 0 10.566.566L2.8 3.366l2.117 2.117a.4.4 0 10.566-.566L3.366 2.8 5.483.683a.4.4 0 00-.566-.566L2.8 2.234z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PathIcon;
/* prettier-ignore-end */
