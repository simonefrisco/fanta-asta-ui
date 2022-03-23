// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path6IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path6Icon(props: Path6IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 164 48"}
      height={"1em"}
      width={"1em"}
      style={{
        stroke: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M1 22.212s8.056 3.596 11.228 8.87c3.173 5.272 6.425 8.909 9.998 1.739 3.572-7.17 5.544-12.422 5.544-12.422s4.371-7.649 9.632-.987c5.26 6.661 8.654 11.67 8.654 11.67s5.215 6.124 10.191 1.739c4.976-4.385 8.14-6.885 8.14-6.885s5.386-3.452 7.658 2.26c2.272 5.71 5.682 13.93 5.682 13.93s1.432 2.642 3.284 3.743c1.852 1.102 5.241.743 7.053-3.057 1.813-3.8 7.942-21.597 7.942-21.597s3.874-9.941 5.972-14.51c2.098-4.57 7.856-8.184 11.9.99 4.043 9.176 4.758 12.704 4.758 12.704s1.742 5.306 6.867 4.74c5.125-.567 5.339 1.915 7.04 5.482 1.701 3.568 6.355 8.268 6.355 8.268s3.761 4.123 9.903-1.218 10.23-9.278 14.199-17.713"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
      ></path>
    </svg>
  );
}

export default Path6Icon;
/* prettier-ignore-end */
