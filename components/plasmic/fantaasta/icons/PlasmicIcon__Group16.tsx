// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group16IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group16Icon(props: Group16IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 11"}
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
          "M12.732.894c-.03-.207-.297-.342-.425-.408-.094-.048-.53.815-.635.815-.236 0-.264.22-.375.419L6.792 9.35 2.287 1.72c-.111-.2.074-1.234-.162-1.234-.105 0-.33-.455-.424-.407-.127.066-.395-.207-.424 0-.03.208-1.361-.16-1.273 0l5.918 10.314c.594-.116 1.207-.125 1.821-.137L13.156.894c.088-.16-.395.208-.425 0z"
        }
        fill={"currentColor"}
        opacity={".2"}
      ></path>
    </svg>
  );
}

export default Group16Icon;
/* prettier-ignore-end */
