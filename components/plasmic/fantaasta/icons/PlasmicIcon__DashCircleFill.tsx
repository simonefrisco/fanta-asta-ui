// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DashCircleFillIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DashCircleFillIcon(props: DashCircleFillIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 17 16"}
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
          "M17 8c0 4.418-3.806 8-8.5 8S0 12.418 0 8s3.806-8 8.5-8S17 3.582 17 8zM4.781 7.5c-.293 0-.531.224-.531.5s.238.5.531.5h7.438c.293 0 .531-.224.531-.5s-.238-.5-.531-.5H4.78z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default DashCircleFillIcon;
/* prettier-ignore-end */
