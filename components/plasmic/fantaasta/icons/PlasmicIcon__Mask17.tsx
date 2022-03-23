// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask17IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask17Icon(props: Mask17IconProps) {
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
          "M14.775 3.975l-3.75-3.75A.68.68 0 0010.5 0H2.25C.975 0 0 .975 0 2.25v10.5C0 14.025.975 15 2.25 15h10.5c1.275 0 2.25-.975 2.25-2.25V4.5a.68.68 0 00-.225-.525zM10.5 13.5h-6V9h6v4.5zm2.25 0c.45 0 .75-.3.75-.75V4.8l-3.3-3.3H4.5v2.25h5.25c.45 0 .75.3.75.75s-.3.75-.75.75h-6c-.45 0-.75-.3-.75-.75v-3h-.75c-.45 0-.75.3-.75.75v10.5c0 .45.3.75.75.75H3V8.25c0-.45.3-.75.75-.75h7.5c.45 0 .75.3.75.75v5.25h.75z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Mask17Icon;
/* prettier-ignore-end */
