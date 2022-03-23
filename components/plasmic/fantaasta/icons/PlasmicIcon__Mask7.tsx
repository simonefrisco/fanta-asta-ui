// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask7IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask7Icon(props: Mask7IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 17 17"}
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
          "M3 11.25c.45 0 .75-.3.75-.75s-.3-.75-.75-.75h-.75c-.45 0-.75-.3-.75-.75V2.25c0-.45.3-.75.75-.75H9c.45 0 .75.3.75.75V3c0 .45.3.75.75.75s.75-.3.75-.75v-.75C11.25.975 10.275 0 9 0H2.25C.975 0 0 .975 0 2.25V9c0 1.275.975 2.25 2.25 2.25H3zm11.25-6H7.5c-1.275 0-2.25.975-2.25 2.25v6.75c0 1.275.975 2.25 2.25 2.25h6.75c1.275 0 2.25-.975 2.25-2.25V7.5c0-1.275-.975-2.25-2.25-2.25zm.75 9c0 .45-.3.75-.75.75H7.5c-.45 0-.75-.3-.75-.75V7.5c0-.45.3-.75.75-.75h6.75c.45 0 .75.3.75.75v6.75z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Mask7Icon;
/* prettier-ignore-end */
