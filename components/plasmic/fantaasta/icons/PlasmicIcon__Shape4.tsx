// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Shape4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Shape4Icon(props: Shape4IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 10 8"}
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
          "M7.275 8a2.03 2.03 0 01-.467-.055L1.463 6.678C.43 6.433-.2 5.434.057 4.451l.798-3.057C1.069.574 1.838 0 2.725 0c.157 0 .314.018.467.055l5.345 1.267c1.032.245 1.662 1.244 1.406 2.227l-.798 3.057C8.931 7.426 8.162 8 7.275 8zm-4.55-6.425a.273.273 0 00-.266.2L1.66 4.83a.262.262 0 00.2.319l5.347 1.267c.125.03.29-.025.333-.192l.8-3.054a.262.262 0 00-.201-.319L2.792 1.583a.29.29 0 00-.067-.008z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Shape4Icon;
/* prettier-ignore-end */
