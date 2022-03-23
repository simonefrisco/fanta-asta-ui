// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask3Icon(props: Mask3IconProps) {
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
          "M2.25 0h12c1.275 0 2.25.975 2.25 2.25v3c0 1.275-.975 2.25-2.25 2.25h-12C.975 7.5 0 6.525 0 5.25v-3C0 .975.975 0 2.25 0zm12 6c.45 0 .75-.3.75-.75v-3c0-.45-.3-.75-.75-.75h-12c-.45 0-.75.3-.75.75v3c0 .45.3.75.75.75h12zm0 3h-12C.975 9 0 9.975 0 11.25v3c0 1.275.975 2.25 2.25 2.25h12c1.275 0 2.25-.975 2.25-2.25v-3c0-1.275-.975-2.25-2.25-2.25zm0 6c.45 0 .75-.3.75-.75v-3c0-.45-.3-.75-.75-.75h-12c-.45 0-.75.3-.75.75v3c0 .45.3.75.75.75h12zM4.275 3.225c.15.15.225.3.225.525a.68.68 0 01-.225.525.68.68 0 01-.525.225.68.68 0 01-.525-.225c-.075-.075-.15-.15-.15-.225C3 3.975 3 3.825 3 3.75c0-.075 0-.225.075-.3a.392.392 0 00.075-.113c.019-.037.038-.075.075-.112.075-.075.15-.15.225-.15a.828.828 0 01.6 0c.075 0 .15.075.225.15zM4.5 12.75a.68.68 0 00-.225-.525c-.3-.3-.75-.3-1.05 0-.038.037-.056.075-.075.113a.392.392 0 01-.075.112c-.075.075-.075.225-.075.3a.68.68 0 00.225.525c.15.15.3.225.525.225a.68.68 0 00.525-.225.68.68 0 00.225-.525z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Mask3Icon;
/* prettier-ignore-end */
