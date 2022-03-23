// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask41IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask41Icon(props: Mask41IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 17 15"}
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
          "M2.25 0h12c1.275 0 2.25.975 2.25 2.25v7.5c0 1.275-.975 2.25-2.25 2.25H9v1.5h2.25c.45 0 .75.3.75.75s-.3.75-.75.75h-6c-.45 0-.75-.3-.75-.75s.3-.75.75-.75H7.5V12H2.25C.975 12 0 11.025 0 9.75v-7.5C0 .975.975 0 2.25 0zm12 10.5c.45 0 .75-.3.75-.75v-7.5c0-.45-.3-.75-.75-.75h-12c-.45 0-.75.3-.75.75v7.5c0 .45.3.75.75.75h12z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Mask41Icon;
/* prettier-ignore-end */
