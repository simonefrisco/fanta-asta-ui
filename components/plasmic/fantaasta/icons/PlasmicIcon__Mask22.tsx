// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask22IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask22Icon(props: Mask22IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 10 6"}
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
          "M9.133 1.133l-4 4a.605.605 0 01-.466.2.605.605 0 01-.467-.2l-4-4A.644.644 0 01.2.2a.644.644 0 01.933 0l3.534 3.533L8.2.2a.644.644 0 01.933 0 .644.644 0 010 .933z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Mask22Icon;
/* prettier-ignore-end */
