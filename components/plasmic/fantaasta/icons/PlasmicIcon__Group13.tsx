// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group13IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group13Icon(props: Group13IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 4 4"}
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
          "M0 0v3.487c0 .117.082.224.205.269a.383.383 0 00.128.022.36.36 0 00.235-.086L2 2.445l1.431 1.247a.37.37 0 00.363.063c.125-.044.206-.15.206-.268V0H0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group13Icon;
/* prettier-ignore-end */
