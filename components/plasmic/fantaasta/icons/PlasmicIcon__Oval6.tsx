// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Oval6IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Oval6Icon(props: Oval6IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 30 30"}
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

      <circle
        cx={"15"}
        cy={"15"}
        r={"15"}
        fill={"currentColor"}
        fillOpacity={".12"}
      ></circle>
    </svg>
  );
}

export default Oval6Icon;
/* prettier-ignore-end */
