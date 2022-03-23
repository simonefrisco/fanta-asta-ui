// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path21IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path21Icon(props: Path21IconProps) {
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M0 0v3.692a.31.31 0 00.205.284.348.348 0 00.363-.067L2 2.59l1.431 1.32a.348.348 0 00.363.067A.309.309 0 004 3.692V0H0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path21Icon;
/* prettier-ignore-end */
