// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CombinedShapeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CombinedShapeIcon(props: CombinedShapeIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 10 15"}
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
        opacity={".3"}
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M1.9 1.425C1.9.638 2.538 0 3.325 0h4.75a1.425 1.425 0 110 2.85h-4.75A1.425 1.425 0 011.9 1.425zm0 11.4c0-.787.638-1.425 1.425-1.425h4.75a1.425 1.425 0 010 2.85h-4.75A1.425 1.425 0 011.9 12.825zM1.425 5.7a1.425 1.425 0 000 2.85h3.8a1.425 1.425 0 100-2.85h-3.8z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CombinedShapeIcon;
/* prettier-ignore-end */
