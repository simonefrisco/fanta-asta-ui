// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ChevronRight2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ChevronRight2Icon(props: ChevronRight2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 10 10"}
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
          "M2.904 1.029a.312.312 0 01.442 0l3.75 3.75a.312.312 0 010 .442l-3.75 3.75a.312.312 0 11-.442-.442L6.434 5l-3.53-3.529a.312.312 0 010-.442z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ChevronRight2Icon;
/* prettier-ignore-end */
