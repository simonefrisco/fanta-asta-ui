// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask48IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask48Icon(props: Mask48IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 22 24"}
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
          "M12.3.3l8 4c1.1.5 1.7 1.5 1.7 2.6v9.5c0 1.2-.7 2.2-1.7 2.7l-8 4c-.4.2-.8.3-1.3.3-.4 0-.9-.1-1.3-.3l-8-4C.6 18.6 0 17.5 0 16.4V6.9c0-1.1.6-2.1 1.6-2.6l8-4c.9-.4 1.9-.4 2.7 0zM11 1.9c-.1 0-.3 0-.4.1L3.2 5.7 11 9.6l7.8-3.9L11.4 2c-.1-.1-.2-.1-.4-.1zM2.5 17.4c-.3-.2-.5-.6-.5-.9V7.3l8 4v9.8l-7.5-3.7zm9.5 3.7l7.4-3.7c.4-.2.6-.5.6-.9V7.3l-8 4v9.8z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Mask48Icon;
/* prettier-ignore-end */
