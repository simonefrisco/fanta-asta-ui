// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group17IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group17Icon(props: Group17IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 11 10"}
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
          "M5.484 10h3.722l.919-.833C9.696 4.034 5.308 0 0 0c3.03 0 5.484 4.477 5.484 10z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group17Icon;
/* prettier-ignore-end */
