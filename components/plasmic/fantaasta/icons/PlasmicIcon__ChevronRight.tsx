// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ChevronRightIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ChevronRightIcon(props: ChevronRightIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 14"}
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
          "M4.066 1.44c.17-.17.447-.17.618 0l5.25 5.25a.439.439 0 010 .62l-5.25 5.25a.438.438 0 01-.618-.62L9.006 7l-4.94-4.94a.438.438 0 010-.62z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ChevronRightIcon;
/* prettier-ignore-end */
