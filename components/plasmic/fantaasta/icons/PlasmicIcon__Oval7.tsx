// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Oval7IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Oval7Icon(props: Oval7IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 5 5"}
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
        cx={"2.099"}
        cy={"2.099"}
        r={"2.099"}
        fill={"currentColor"}
      ></circle>
    </svg>
  );
}

export default Oval7Icon;
/* prettier-ignore-end */
