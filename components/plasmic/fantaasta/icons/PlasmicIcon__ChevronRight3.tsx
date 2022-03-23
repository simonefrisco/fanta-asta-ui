// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ChevronRight3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ChevronRight3Icon(props: ChevronRight3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 8 8"}
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
          "M2.323.823a.25.25 0 01.354 0l3 3a.25.25 0 010 .354l-3 3a.25.25 0 01-.354-.354L5.146 4 2.323 1.177a.25.25 0 010-.354z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ChevronRight3Icon;
/* prettier-ignore-end */
