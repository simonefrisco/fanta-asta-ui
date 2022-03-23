// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path15IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path15Icon(props: Path15IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 168 33"}
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
        d={
          "M1 9.185s7.973 4.054 10.385 8.829c2.413 4.774 5.35 8.112 8.606 1.11 3.256-7.003 7.033-14.257 7.033-14.257s4.48-7.734 10.035 0c5.555 7.735 7.893 10.511 7.893 10.511s5.997 9.052 12.87 1.43c6.873-7.623 10.174-8.044 10.174-8.044s4.323-.221 6.497 8.724c2.174 8.944 4.135 11.98 4.135 11.98s4.924 7.718 11.599-2.858c6.674-10.577 10.522-16.04 10.522-16.04s5.482-6.597 10.264 1.317c4.782 7.913 7.047 9.488 10.495 5.6 3.449-3.886 8.093-7.723 13.009.527 4.917 8.249 12.461 14.369 18.827 4.12C159.709 11.888 167 6.113 167 6.113"
        }
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeDasharray={"5"}
      ></path>
    </svg>
  );
}

export default Path15Icon;
/* prettier-ignore-end */
