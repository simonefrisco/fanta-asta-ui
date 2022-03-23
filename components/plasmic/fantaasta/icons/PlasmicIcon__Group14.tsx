// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group14IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group14Icon(props: Group14IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 19"}
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
        d={
          "M19.94 6.86a1.24 1.24 0 00-1.01-.81l-5.395-.744L11.123.664A1.26 1.26 0 0010 0a1.26 1.26 0 00-1.122.664L6.466 5.306l-5.394.745a1.233 1.233 0 00-1.01.81c-.148.43-.026.902.316 1.218l3.904 3.615-.921 5.104c-.08.446.113.896.498 1.162a1.302 1.302 0 001.317.09L10 15.642l4.825 2.41a1.303 1.303 0 001.318-.09c.385-.267.578-.718.498-1.163l-.922-5.105 3.904-3.614a1.15 1.15 0 00.316-1.219z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group14Icon;
/* prettier-ignore-end */
