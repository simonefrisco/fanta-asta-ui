// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group11IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group11Icon(props: Group11IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 10 8"}
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
          "M6.505 7.566c.146.035.296.053.446.053.847 0 1.582-.546 1.786-1.328L9.5 3.379c.246-.936-.356-1.887-1.342-2.12L3.049.052A1.945 1.945 0 002.604 0C1.756 0 1.022.546.817 1.327L.055 4.24c-.246.936.357 1.888 1.342 2.12l5.108 1.207zM2.349 1.69a.261.261 0 01.255-.19c.021 0 .043.002.064.008l5.107 1.207a.25.25 0 01.192.303l-.762 2.91c-.041.16-.2.212-.319.183L1.78 4.904a.25.25 0 01-.192-.303L2.35 1.69z"
        }
        fill={"currentColor"}
        opacity={".2"}
      ></path>
    </svg>
  );
}

export default Group11Icon;
/* prettier-ignore-end */
