// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group15IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group15Icon(props: Group15IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 6"}
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
        d={"M16 1c0-.552-.477-1-1.067-1H1.067C.477 0 0 .448 0 1v2h16V1z"}
        fill={"currentColor"}
      ></path>

      <path
        d={"M0 1v5h14.933C15.523 6 16 5.553 16 5V3L0 1z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group15Icon;
/* prettier-ignore-end */
