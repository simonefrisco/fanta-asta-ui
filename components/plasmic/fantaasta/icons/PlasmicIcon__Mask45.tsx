// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask45IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask45Icon(props: Mask45IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 15"}
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
          "M17.5 0h-15C1.083 0 0 1.083 0 2.5v10C0 13.917 1.083 15 2.5 15h15c1.417 0 2.5-1.083 2.5-2.5v-10C20 1.083 18.917 0 17.5 0zm-15 1.667h15c.5 0 .833.333.833.833V5H1.667V2.5c0-.5.333-.833.833-.833zm0 11.666h15c.5 0 .833-.333.833-.833V6.667H1.667V12.5c0 .5.333.833.833.833z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Mask45Icon;
/* prettier-ignore-end */
