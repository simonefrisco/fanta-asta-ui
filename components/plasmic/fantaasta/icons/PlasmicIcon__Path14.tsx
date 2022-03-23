// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path14IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path14Icon(props: Path14IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 8 9"}
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
          "M1.212 8.42c-.384.433-.66.825-1.045.392-.385-.433-.036-.743.349-1.176L5.394.58C5.778.147 7.448-.245 7.833.188c.385.433.036 2.311-.349 2.744L1.212 8.42z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path14Icon;
/* prettier-ignore-end */
