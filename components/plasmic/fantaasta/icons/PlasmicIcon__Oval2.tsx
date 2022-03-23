// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Oval2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Oval2Icon(props: Oval2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 110 110"}
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

      <circle
        opacity={".2"}
        cx={"55"}
        cy={"55"}
        r={"47"}
        stroke={"currentColor"}
        strokeWidth={"16"}
      ></circle>
    </svg>
  );
}

export default Oval2Icon;
/* prettier-ignore-end */
