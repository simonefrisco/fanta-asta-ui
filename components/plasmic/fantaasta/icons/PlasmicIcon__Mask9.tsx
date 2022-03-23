// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask9IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask9Icon(props: Mask9IconProps) {
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
          "M14.25 3H12v-.75C12 .975 11.025 0 9.75 0h-3C5.475 0 4.5.975 4.5 2.25V3H2.25C.975 3 0 3.975 0 5.25v7.5C0 14.025.975 15 2.25 15h12c1.275 0 2.25-.975 2.25-2.25v-7.5c0-1.275-.975-2.25-2.25-2.25zM6 2.25c0-.45.3-.75.75-.75h3c.45 0 .75.3.75.75V3H6v-.75zm4.5 11.25v-9H6v9h4.5zm-9-.75v-7.5c0-.45.3-.75.75-.75H4.5v9H2.25c-.45 0-.75-.3-.75-.75zm12.75.75c.45 0 .75-.3.75-.75v-7.5c0-.45-.3-.75-.75-.75H12v9h2.25z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Mask9Icon;
/* prettier-ignore-end */
