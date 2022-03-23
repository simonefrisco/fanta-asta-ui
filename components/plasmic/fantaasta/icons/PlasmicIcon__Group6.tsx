// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group6IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group6Icon(props: Group6IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 9 10"}
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
          "M4.094 1.973C6.631-.697 8.763.117 8.763.117S9.537 2.361 7 5.031C4.462 7.701.354 9.641.034 9.305c-.31-.327 1.523-4.662 4.06-7.332z"
        }
        fill={"currentColor"}
        opacity={".2"}
      ></path>
    </svg>
  );
}

export default Group6Icon;
/* prettier-ignore-end */
