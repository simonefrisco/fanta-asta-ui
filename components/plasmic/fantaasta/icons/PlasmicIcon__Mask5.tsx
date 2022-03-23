// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask5Icon(props: Mask5IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 17"}
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
          "M13.35 4.838a.391.391 0 00.075.112c.075.075.075.225.075.3v9c0 1.275-.975 2.25-2.25 2.25h-9C.975 16.5 0 15.525 0 14.25v-12C0 .975.975 0 2.25 0h6c.075 0 .225 0 .3.075.075 0 .15.075.225.15l4.5 4.5a.391.391 0 01.075.113zm-2.4-.338L9 2.55V4.5h1.95zm.3 10.5h-9c-.45 0-.75-.3-.75-.75v-12c0-.45.3-.75.75-.75H7.5v3.75c0 .45.3.75.75.75H12v8.25c0 .45-.3.75-.75.75zm-1.5-5.25c.45 0 .75-.3.75-.75s-.3-.75-.75-.75h-6c-.45 0-.75.3-.75.75s.3.75.75.75h6zM10.5 12c0 .45-.3.75-.75.75h-6c-.45 0-.75-.3-.75-.75s.3-.75.75-.75h6c.45 0 .75.3.75.75zM3.75 5.25c-.45 0-.75.3-.75.75s.3.75.75.75h1.5c.45 0 .75-.3.75-.75s-.3-.75-.75-.75h-1.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Mask5Icon;
/* prettier-ignore-end */
