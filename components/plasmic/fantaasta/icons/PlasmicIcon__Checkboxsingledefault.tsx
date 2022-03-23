// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CheckboxsingledefaultIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CheckboxsingledefaultIcon(
  props: CheckboxsingledefaultIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
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
          "M3.846 2c-.917 0-1.142.043-1.368.164a.727.727 0 00-.314.314c-.12.226-.164.45-.164 1.368v12.308c0 .918.043 1.142.164 1.368.075.14.174.239.314.314.226.12.45.164 1.368.164h12.308c.918 0 1.142-.043 1.368-.164a.728.728 0 00.314-.314c.12-.226.164-.45.164-1.368V3.846c0-.917-.043-1.142-.164-1.368a.728.728 0 00-.314-.314c-.226-.12-.45-.164-1.368-.164H3.846zm0-2h12.308c1.337 0 1.822.14 2.311.4.49.262.873.646 1.134 1.135.262.489.401.974.401 2.31v12.31c0 1.336-.14 1.821-.4 2.31a2.726 2.726 0 01-1.135 1.134c-.489.262-.974.401-2.31.401H3.844c-1.336 0-1.821-.14-2.31-.4A2.726 2.726 0 01.4 18.464c-.261-.488-.4-.973-.4-2.309V3.844c0-1.336.14-1.821.4-2.31A2.726 2.726 0 011.536.4c.488-.261.973-.4 2.309-.4z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CheckboxsingledefaultIcon;
/* prettier-ignore-end */
