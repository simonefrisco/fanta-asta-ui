// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask37IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask37Icon(props: Mask37IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 10"}
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
          "M16 .667v4c0 .4-.267.666-.667.666s-.666-.266-.666-.666v-2.4l-5.2 5.2a.644.644 0 01-.934 0L5.667 4.6 1.133 9.133a.605.605 0 01-.466.2.605.605 0 01-.467-.2.644.644 0 010-.933l5-5a.644.644 0 01.933 0L9 6.067l4.733-4.734h-2.4c-.4 0-.666-.266-.666-.666S10.933 0 11.333 0h4c.067 0 .2 0 .267.067.133.066.267.2.333.333.067.067.067.2.067.267z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Mask37Icon;
/* prettier-ignore-end */
