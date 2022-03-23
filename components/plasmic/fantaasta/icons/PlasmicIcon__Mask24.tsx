// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask24IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask24Icon(props: Mask24IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 17 17"}
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
          "M0 8.25A8.226 8.226 0 018.25 0a8.226 8.226 0 018.25 8.25 8.226 8.226 0 01-8.25 8.25A8.226 8.226 0 010 8.25zm1.5 0C1.5 12 4.5 15 8.25 15S15 12 15 8.25 12 1.5 8.25 1.5 1.5 4.5 1.5 8.25zm6.75-3c-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3-1.35-3-3-3zm-1.5 3c0 .825.675 1.5 1.5 1.5s1.5-.675 1.5-1.5-.675-1.5-1.5-1.5-1.5.675-1.5 1.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Mask24Icon;
/* prettier-ignore-end */
