// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon7IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon7Icon(props: Icon7IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 15"}
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
          "M3 10.5H1v3h2v-3zm5-4H6v7h2v-7zm5-5h-2v12h2v-12zm-2-1a1 1 0 00-1 1v12a1 1 0 001 1h2a1 1 0 001-1v-12a1 1 0 00-1-1h-2zm-6 6a1 1 0 011-1h2a1 1 0 011 1v7a1 1 0 01-1 1H6a1 1 0 01-1-1v-7zm-5 4a1 1 0 011-1h2a1 1 0 011 1v3a1 1 0 01-1 1H1a1 1 0 01-1-1v-3z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon7Icon;
/* prettier-ignore-end */
