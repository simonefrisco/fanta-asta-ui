// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Shape3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Shape3Icon(props: Shape3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 4 14"}
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
          "M1.545 3c.85 0 1.545-.675 1.545-1.5S2.394 0 1.545 0C.695 0 0 .675 0 1.5S.695 3 1.545 3zM3.09 6.75c0 .825-.696 1.5-1.545 1.5C.695 8.25 0 7.575 0 6.75s.695-1.5 1.545-1.5 1.545.675 1.545 1.5zM0 12c0-.825.695-1.5 1.545-1.5s1.545.675 1.545 1.5-.696 1.5-1.545 1.5C.695 13.5 0 12.825 0 12z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Shape3Icon;
/* prettier-ignore-end */
