// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask50IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask50Icon(props: Mask50IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 14"}
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
          "M24 1v6c0 .6-.4 1-1 1s-1-.4-1-1V3.4l-7.8 7.8c-.4.4-1 .4-1.4 0L8.5 6.9l-6.8 6.8c-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l7.5-7.5c.4-.4 1-.4 1.4 0l4.3 4.3L20.6 2H17c-.6 0-1-.4-1-1s.4-1 1-1h6c.1 0 .3 0 .4.1.2.1.4.3.5.5.1.1.1.3.1.4z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Mask50Icon;
/* prettier-ignore-end */
