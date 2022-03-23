// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path26IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path26Icon(props: Path26IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 9"}
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
          "M14.933 0H1.067C.477 0 0 .448 0 1v5h7.2c.442 0 .8.336.8.75s.358.75.8.75c.442 0 .8-.336.8-.75s.358-.75.8-.75c.442 0 .8.336.8.75v1.5c0 .414.358.75.8.75.442 0 .8-.336.8-.75v-1.5c0-.414.358-.75.8-.75.442 0 .8.336.8.75v.5c0 .414.358.75.8.75.442 0 .8-.336.8-.75V1c0-.552-.477-1-1.067-1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path26Icon;
/* prettier-ignore-end */
