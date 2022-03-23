// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon10IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon10Icon(props: Icon10IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 15"}
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
          "M2 13V6.5h1V13a.5.5 0 00.5.5h9a.5.5 0 00.5-.5V6.5h1V13a1.5 1.5 0 01-1.5 1.5h-9A1.5 1.5 0 012 13zM13 2v3.5l-2-2V2a.5.5 0 01.5-.5h1a.5.5 0 01.5.5z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M7.293 1a1 1 0 011.414 0l6.647 6.646a.5.5 0 01-.708.707L8 1.707 1.354 8.353a.5.5 0 11-.708-.707L7.293 1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon10Icon;
/* prettier-ignore-end */
