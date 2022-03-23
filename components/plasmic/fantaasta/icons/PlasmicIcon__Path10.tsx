// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path10IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path10Icon(props: Path10IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 11 9"}
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
          "M7.47 5.484C6.64 6.354.785 8.886.785 8.886c-.644.372-1.112-.184-.499-1.449L2.65 2.892C3.95.442 4.288-.031 6.93.002l3.12.455c1.07.156 1.266.995.436 1.865L7.47 5.484z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path10Icon;
/* prettier-ignore-end */
