// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DeviceHubIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DeviceHubIcon(props: DeviceHubIconProps) {
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
          "M17 17l-4-4V9.82c1.35-.49 2.26-1.89 1.93-3.46a3.013 3.013 0 00-2.42-2.32A3.001 3.001 0 009 7c0 1.3.84 2.4 2 2.82V13l-4 4H4c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-2.05l4-4.2 4 4.2V21c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1h-3z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default DeviceHubIcon;
/* prettier-ignore-end */
