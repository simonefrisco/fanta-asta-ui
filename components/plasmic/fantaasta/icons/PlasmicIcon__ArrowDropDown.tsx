// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ArrowDropDownIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ArrowDropDownIcon(props: ArrowDropDownIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
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
          "M7.413 11.382l3.607 3.607c.543.543 1.42.543 1.963 0l3.607-3.607c.878-.878.251-2.382-.988-2.382H8.388c-1.24 0-1.852 1.504-.975 2.382z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ArrowDropDownIcon;
/* prettier-ignore-end */
