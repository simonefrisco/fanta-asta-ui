// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask43IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask43Icon(props: Mask43IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 17 17"}
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
          "M8.25 16.5a8.226 8.226 0 008.25-8.25A8.226 8.226 0 008.25 0 8.226 8.226 0 000 8.25a8.226 8.226 0 008.25 8.25zm.15-6.825c.3-.075 2.775-.975 2.775-2.925 0-1.275-.825-2.4-2.025-2.775a2.92 2.92 0 00-3.825 1.8c-.075.375.075.825.45.825.375.15.825-.075.975-.45.3-.75 1.2-1.2 1.95-.9.6.225.975.75.975 1.425C9.675 7.5 8.4 8.1 7.95 8.25c-.375.15-.6.6-.45.975a.72.72 0 00.675.525c.075 0 .15 0 .225-.075zM15 8.25C15 4.5 12 1.5 8.25 1.5S1.5 4.5 1.5 8.25 4.5 15 8.25 15 15 12 15 8.25zM8.625 11.4c.075 0 .15.075.15.075.075.075.15.15.075.225.075.075.075.225.075.3a.68.68 0 01-.225.525.68.68 0 01-.525.225.68.68 0 01-.525-.225.68.68 0 01-.225-.525c0-.088.026-.15.047-.201.015-.037.028-.068.028-.099 0-.075.075-.15.15-.225.075-.075.15-.15.225-.15.15-.075.3-.075.45-.075.043.043.061.062.084.07a.204.204 0 00.066.005c.037 0 .056.019.075.038.019.018.037.037.075.037z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Mask43Icon;
/* prettier-ignore-end */
