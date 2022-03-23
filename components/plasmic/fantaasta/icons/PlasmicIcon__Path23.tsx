// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path23IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path23Icon(props: Path23IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 14"}
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
          "M16 12.923c0 .595-.477 1.077-1.067 1.077H1.067C.477 14 0 13.518 0 12.923V1.077C0 .482.477 0 1.067 0h13.866C15.523 0 16 .482 16 1.077v11.846z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path23Icon;
/* prettier-ignore-end */
