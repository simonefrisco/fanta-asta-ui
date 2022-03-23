// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask47IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask47Icon(props: Mask47IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 19 17"}
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
          "M15.833 0H2.5C1.083 0 0 1.083 0 2.5v5a9.14 9.14 0 009.167 9.167A9.14 9.14 0 0018.333 7.5v-5c0-1.417-1.083-2.5-2.5-2.5zm.834 7.5c0 4.167-3.334 7.5-7.5 7.5a7.469 7.469 0 01-7.5-7.5v-5c0-.5.333-.833.833-.833h13.333c.5 0 .834.333.834.833v5zm-3.584-.25a.805.805 0 000-1.167.805.805 0 00-1.166 0l-2.75 2.75-2.75-2.75a.806.806 0 00-1.167 0 .806.806 0 000 1.167l3.333 3.333c.167.167.334.25.584.25.25 0 .416-.083.583-.25l3.333-3.333z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Mask47Icon;
/* prettier-ignore-end */
