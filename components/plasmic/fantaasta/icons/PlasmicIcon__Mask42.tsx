// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask42IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask42Icon(props: Mask42IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 9 5"}
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
        d={
          "M7.992 4.492a.53.53 0 01-.409.175.53.53 0 01-.408-.175L4.083 1.4.992 4.492a.564.564 0 01-.817 0 .564.564 0 010-.817l3.5-3.5a.564.564 0 01.817 0l3.5 3.5a.564.564 0 010 .817z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Mask42Icon;
/* prettier-ignore-end */
