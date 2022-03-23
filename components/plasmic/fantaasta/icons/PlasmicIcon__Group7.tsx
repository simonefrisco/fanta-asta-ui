// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group7IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group7Icon(props: Group7IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 15 16"}
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
          "M10.37 12.052C6.332 16.362.139 15.182.139 15.182S-.967 8.577 3.073 4.267C7.113-.042 13.233-.5 14.037.357c.779.832.374 7.386-3.666 11.695z"
        }
        fill={"currentColor"}
        opacity={".2"}
      ></path>
    </svg>
  );
}

export default Group7Icon;
/* prettier-ignore-end */
