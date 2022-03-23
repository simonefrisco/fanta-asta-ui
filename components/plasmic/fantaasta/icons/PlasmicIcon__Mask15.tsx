// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask15IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask15Icon(props: Mask15IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 15"}
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
          "M3 3.75C3 1.65 4.65 0 6.75 0s3.75 1.65 3.75 3.75S8.85 7.5 6.75 7.5 3 5.85 3 3.75zm10.5 9v1.5c0 .45-.3.75-.75.75s-.75-.3-.75-.75v-1.5c0-1.275-.975-2.25-2.25-2.25h-6c-1.275 0-2.25.975-2.25 2.25v1.5c0 .45-.3.75-.75.75S0 14.7 0 14.25v-1.5C0 10.65 1.65 9 3.75 9h6c2.1 0 3.75 1.65 3.75 3.75zM6.75 6C5.475 6 4.5 5.025 4.5 3.75S5.475 1.5 6.75 1.5 9 2.475 9 3.75 8.025 6 6.75 6z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Mask15Icon;
/* prettier-ignore-end */
