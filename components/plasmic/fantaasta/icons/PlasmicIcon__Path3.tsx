// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path3Icon(props: Path3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 13 17"}
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
          "M5.7 15.523c0 .742.962 1.033 1.374.416l5.449-8.173a.75.75 0 00-.624-1.166H7.6V1.477c0-.742-.962-1.033-1.374-.416L.777 9.234a.75.75 0 00.624 1.166H5.7v5.123z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path3Icon;
/* prettier-ignore-end */
