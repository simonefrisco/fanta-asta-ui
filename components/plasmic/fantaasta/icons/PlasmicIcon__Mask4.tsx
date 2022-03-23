// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask4Icon(props: Mask4IconProps) {
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
          "M13.5 7.5c0-.45.3-.75.75-.75s.75.3.75.75v5.25c0 1.275-.975 2.25-2.25 2.25H2.25C.975 15 0 14.025 0 12.75V2.25C0 .975.975 0 2.25 0h8.25c.45 0 .75.3.75.75s-.3.75-.75.75H2.25c-.45 0-.75.3-.75.75v10.5c0 .45.3.75.75.75h10.5c.45 0 .75-.3.75-.75V7.5zM8.025 9.525l8.25-8.25c.3-.3.3-.75 0-1.05-.3-.3-.75-.3-1.05 0L7.5 7.95 5.775 6.225c-.3-.3-.75-.3-1.05 0-.3.3-.3.75 0 1.05l2.25 2.25c.15.15.3.225.525.225a.68.68 0 00.525-.225z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Mask4Icon;
/* prettier-ignore-end */
