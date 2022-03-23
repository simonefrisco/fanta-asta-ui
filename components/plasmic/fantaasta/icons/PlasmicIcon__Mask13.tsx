// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask13IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask13Icon(props: Mask13IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 16"}
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
          "M7.275.225l4.275 4.2c2.625 2.7 2.625 6.975 0 9.6-1.275 1.275-3 1.95-4.8 1.95-1.8 0-3.525-.675-4.8-1.95s-1.95-3-1.95-4.8c0-1.8.675-3.525 2.025-4.8l4.2-4.2A.68.68 0 016.75 0a.68.68 0 01.525.225zm-.525 14.25c1.425 0 2.7-.525 3.75-1.5 2.025-2.1 2.025-5.4-.075-7.425L6.675 1.8 3 5.55c-.975.975-1.5 2.25-1.5 3.675 0 1.425.525 2.7 1.575 3.75.975.975 2.25 1.5 3.675 1.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Mask13Icon;
/* prettier-ignore-end */
