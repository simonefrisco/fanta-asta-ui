// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path16IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path16Icon(props: Path16IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 22 14"}
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
        opacity={".2"}
        d={
          "M20.952 0c-.578 0-1.047.482-1.047 1.077v-.27L1.919 4.788a1.04 1.04 0 00-.871-.48C.468 4.308 0 4.79 0 5.386v3.23c0 .595.469 1.077 1.048 1.077.363 0 .683-.19.871-.48l17.986 3.98v-.269c0 .595.469 1.077 1.047 1.077.58 0 1.048-.482 1.048-1.077V1.077C22 .482 21.531 0 20.952 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path16Icon;
/* prettier-ignore-end */
