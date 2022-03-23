// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group18IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group18Icon(props: Group18IconProps) {
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
          "M10.125 0C4.883 0 .518 4.124 0 9.167L.919 10H4.64c0-5.523 2.455-10 5.484-10z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group18Icon;
/* prettier-ignore-end */
