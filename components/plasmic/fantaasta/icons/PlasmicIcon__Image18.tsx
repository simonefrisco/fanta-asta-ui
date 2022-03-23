// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Image18IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Image18Icon(props: Image18IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 15 15"}
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
          "M.75 0H6c.45 0 .75.3.75.75V6c0 .45-.3.75-.75.75H.75C.3 6.75 0 6.45 0 6V.75C0 .3.3 0 .75 0zm.75 5.25h3.75V1.5H1.5v3.75zM14.25 0H9c-.45 0-.75.3-.75.75V6c0 .45.3.75.75.75h5.25c.45 0 .75-.3.75-.75V.75c0-.45-.3-.75-.75-.75zm-4.5 5.25h3.75V1.5H9.75v3.75zm4.5 3H9c-.45 0-.75.3-.75.75v5.25c0 .45.3.75.75.75h5.25c.45 0 .75-.3.75-.75V9c0-.45-.3-.75-.75-.75zm-4.5 5.25h3.75V9.75H9.75v3.75zM6 8.25H.75C.3 8.25 0 8.55 0 9v5.25c0 .45.3.75.75.75H6c.45 0 .75-.3.75-.75V9c0-.45-.3-.75-.75-.75zM1.5 13.5h3.75V9.75H1.5v3.75z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Image18Icon;
/* prettier-ignore-end */
