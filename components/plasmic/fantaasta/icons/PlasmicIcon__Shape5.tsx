// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Shape5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Shape5Icon(props: Shape5IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 11 15"}
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
          "M8.8 2.143v10.714H2.2V2.143h6.6M8.8 0H2.2C.985 0 0 .96 0 2.143v10.714C0 14.041.985 15 2.2 15h6.6c1.215 0 2.2-.96 2.2-2.143V2.143C11 .959 10.015 0 8.8 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Shape5Icon;
/* prettier-ignore-end */
