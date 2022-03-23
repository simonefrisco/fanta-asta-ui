// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ShapeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ShapeIcon(props: ShapeIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 8"}
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
          "M5.25 3.75c0 .257.025.506.072.747a.974.974 0 01-.072.003H.75C.3 4.5 0 4.2 0 3.75S.3 3 .75 3h4.5c.024 0 .048 0 .072.003-.047.24-.072.49-.072.747zm7.428-.747C12.34 1.27 10.843 0 9 0S5.66 1.271 5.322 3.003c.41.03.678.321.678.747s-.268.717-.678.747C5.66 6.23 7.157 7.5 9 7.5s3.34-1.271 3.678-3.003a.974.974 0 00.072.003h4.5c.375 0 .75-.3.75-.75S17.7 3 17.25 3h-4.5c-.024 0-.048 0-.072.003zm0 0a3.893 3.893 0 010 1.494c-.41-.03-.678-.321-.678-.747s.268-.717.678-.747zM6.75 3.75c0-1.275.975-2.25 2.25-2.25s2.25.975 2.25 2.25S10.275 6 9 6s-2.25-.975-2.25-2.25z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ShapeIcon;
/* prettier-ignore-end */
