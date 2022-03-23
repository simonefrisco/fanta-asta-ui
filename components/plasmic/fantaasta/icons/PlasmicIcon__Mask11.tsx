// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask11IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask11Icon(props: Mask11IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 14"}
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
          "M15.75 0H2.25C.975 0 0 .975 0 2.25v9c0 1.275.975 2.25 2.25 2.25h13.5c1.275 0 2.25-.975 2.25-2.25v-9C18 .975 17.025 0 15.75 0zM2.25 1.5h13.5c.45 0 .75.3.75.75V4.5h-15V2.25c0-.45.3-.75.75-.75zm0 10.5h13.5c.45 0 .75-.3.75-.75V6h-15v5.25c0 .45.3.75.75.75z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Mask11Icon;
/* prettier-ignore-end */
