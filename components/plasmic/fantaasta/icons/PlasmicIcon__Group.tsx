// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GroupIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GroupIcon(props: GroupIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 22 6"}
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
          "M1.466.001l.37 2.236c.093.57.188 1.174.264 1.8h.019c.095-.626.227-1.252.34-1.789L2.95.001h1.136l.463 2.18c.123.615.246 1.23.34 1.856h.02c.065-.626.16-1.241.264-1.867L5.572.001h1.41l-1.42 5.467H4.21l-.436-1.924a23.653 23.653 0 01-.293-1.699h-.019a14.798 14.798 0 01-.302 1.699l-.464 1.923H1.344L0 0h1.466v.001zm7.364 0l.37 2.236c.093.57.188 1.174.264 1.8h.019c.095-.626.227-1.252.34-1.789l.492-2.247h1.136l.463 2.18c.123.615.246 1.23.34 1.856h.02c.066-.626.16-1.241.264-1.867l.398-2.169h1.41l-1.42 5.467h-1.352l-.435-1.923a23.635 23.635 0 01-.293-1.699h-.02a14.74 14.74 0 01-.302 1.699l-.464 1.923H8.708L7.364.001H8.83zm7.364 0l.369 2.236c.094.57.188 1.174.265 1.8h.018c.095-.626.228-1.252.34-1.789L17.68.001h1.135l.463 2.18c.124.615.246 1.23.341 1.856h.019c.066-.626.16-1.241.264-1.867L20.3.001h1.41l-1.42 5.467h-1.352l-.435-1.923a23.69 23.69 0 01-.293-1.699h-.02a14.76 14.76 0 01-.302 1.699l-.464 1.923h-1.352L14.727.001h1.467z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default GroupIcon;
/* prettier-ignore-end */
