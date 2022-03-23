// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon3Icon(props: Icon3IconProps) {
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
      data-testid={"ArrowForwardIosIcon"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path d={"M6.23 20.23L8 22l10-10L8 2 6.23 3.77 14.46 12z"}></path>
    </svg>
  );
}

export default Icon3Icon;
/* prettier-ignore-end */
