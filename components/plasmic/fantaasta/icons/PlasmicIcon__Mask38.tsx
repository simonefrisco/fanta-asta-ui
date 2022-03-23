// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask38IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask38Icon(props: Mask38IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 18"}
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
          "M12 9c0-1.725-.75-3.225-1.875-4.35L9.9 2.025C9.75.9 8.85 0 7.65 0h-3.3C3.225 0 2.25.9 2.1 2.025L1.875 4.65A5.992 5.992 0 000 9c0 1.725.75 3.3 1.875 4.35l.225 2.625C2.25 17.1 3.225 18 4.35 18h3.225c1.2 0 2.1-.9 2.25-2.025l.225-2.55C11.25 12.3 12 10.725 12 9zM3.6 2.175c0-.375.375-.675.75-.675h3.3c.375 0 .675.3.75.675l.15 1.35C7.725 3.225 6.9 3 6 3c-.9 0-1.725.225-2.475.525l.075-1.35zM6 4.5A4.513 4.513 0 001.5 9c0 2.475 2.025 4.5 4.5 4.5 1.125 0 2.175-.375 2.925-1.05C9.9 11.625 10.5 10.35 10.5 9c0-2.475-2.025-4.5-4.5-4.5zm2.4 11.325c0 .375-.375.675-.75.675h-3.3c-.375 0-.675-.3-.75-.675l-.15-1.35c.75.375 1.575.525 2.475.525.9 0 1.725-.225 2.475-.525v1.35zM5.25 9a.68.68 0 00.225.525L6.6 10.65a.81.81 0 00.525.225.81.81 0 00.525-.225c.3-.3.3-.75 0-1.05l-.9-.9V6.75C6.75 6.3 6.45 6 6 6s-.75.3-.75.75V9z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Mask38Icon;
/* prettier-ignore-end */
