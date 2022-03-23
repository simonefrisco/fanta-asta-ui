// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse10IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse10Icon(props: Ellipse10IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 213 172"}
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
          "M208.518 106.5c2.475 0 4.492-2.008 4.388-4.481a106.502 106.502 0 00-183.817-68.66 106.5 106.5 0 00-8.544 136.022c1.462 1.998 4.29 2.309 6.225.765 1.935-1.545 2.242-4.359.788-6.363a97.538 97.538 0 018.047-124.268 97.536 97.536 0 01168.327 62.504c.114 2.473 2.11 4.481 4.586 4.481z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Ellipse10Icon;
/* prettier-ignore-end */
