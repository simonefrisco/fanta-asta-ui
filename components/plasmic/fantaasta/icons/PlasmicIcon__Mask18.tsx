// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask18IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask18Icon(props: Mask18IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 15 17"}
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
          "M12.75 1.5h-1.5V.75c0-.45-.3-.75-.75-.75s-.75.3-.75.75v.75h-4.5V.75C5.25.3 4.95 0 4.5 0s-.75.3-.75.75v.75h-1.5C.975 1.5 0 2.475 0 3.75v10.5c0 1.275.975 2.25 2.25 2.25h10.5c1.275 0 2.25-.975 2.25-2.25V3.75c0-1.275-.975-2.25-2.25-2.25zM2.25 3h1.5v.75c0 .45.3.75.75.75s.75-.3.75-.75V3h4.5v.75c0 .45.3.75.75.75s.75-.3.75-.75V3h1.5c.45 0 .75.3.75.75V6h-12V3.75c0-.45.3-.75.75-.75zm0 12h10.5c.45 0 .75-.3.75-.75V7.5h-12v6.75c0 .45.3.75.75.75z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Mask18Icon;
/* prettier-ignore-end */
