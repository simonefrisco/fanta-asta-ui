// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path25IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path25Icon(props: Path25IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 11"}
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
          "M0 0v2c0 .553.477 1 1.067 1H4.8s1.6 0 1.6 1.5c0 2.09-.4 3.128-.532 3.414-.01.022-.022.043-.032.066l-.01.02h.003c-.106.25-.168.521-.168.807C5.66 10.018 6.708 11 8 11s2.339-.982 2.339-2.193A2.06 2.06 0 0010.17 8h.004l-.01-.02c-.01-.023-.022-.044-.032-.066C10 7.63 9.6 6.591 9.6 4.5c0 0 .005-1.5 1.6-1.5h3.733C15.523 3 16 2.553 16 2V0H0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path25Icon;
/* prettier-ignore-end */
