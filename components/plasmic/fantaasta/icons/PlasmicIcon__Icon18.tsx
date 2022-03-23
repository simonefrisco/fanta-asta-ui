// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon18IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon18Icon(props: Icon18IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      className={classNames(
        "plasmic-default__svg",
        className,
        "MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-uqopch"
      )}
      focusable={"false"}
      viewBox={"0 0 24 24"}
      aria-hidden={"true"}
      data-testid={"KeyboardArrowDownIcon"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"}
      ></path>
    </svg>
  );
}

export default Icon18Icon;
/* prettier-ignore-end */
