// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask28IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask28Icon(props: Mask28IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 19 18"}
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
          "M17.638 6.008c.332.083.581.25.664.582.083.25 0 .582-.249.749l-3.82 3.742.913 5.322a.791.791 0 01-.332.832c-.166.083-.332.166-.498.166H13.9l-4.733-2.495-4.734 2.495c-.332.166-.665.083-.914-.083a.791.791 0 01-.332-.832l.914-5.322L.28 7.422c-.25-.166-.333-.5-.25-.832.166-.332.415-.582.748-.582l5.232-.831L8.419.437c.25-.583 1.246-.583 1.495 0l2.409 4.823 5.315.748zm-5.15 4.99c0-.25.084-.5.25-.749l2.99-2.91-4.07-.582c-.332 0-.581-.167-.664-.416L9.167 2.68 7.34 6.425c-.167.166-.416.416-.665.416l-4.07.582 2.99 2.827c.167.25.25.5.25.749l-.748 4.074 3.654-1.912a.622.622 0 01.748 0l3.654 1.912-.664-4.074z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Mask28Icon;
/* prettier-ignore-end */
