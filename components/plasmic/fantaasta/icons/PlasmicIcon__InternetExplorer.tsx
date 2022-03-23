// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type InternetExplorerIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function InternetExplorerIcon(props: InternetExplorerIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 29 28"}
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
          "M16.018 7.618c3.191 0 5.319 2.456 5.398 4.892H10.553c.106-2.073 2.055-4.892 5.465-4.892zm0 14.1c-3.192 0-5.465-2.728-5.544-5.501h18.501c.282-5.973-1.813-10.209-7.179-13.163.784-.846 7.207-3.072 5.563 2.977l.632.9c2.786-8.323-5.583-7.87-11.12-5.23-7.983-.025-12.502 4.9-13.744 9.954 2.158-3.038 4.947-4.839 6.766-5.34-10.41 8.211-15.248 26.32-1.11 20.581l-.981-.58c-8.508 2.632-5.221-4.805-3.584-5.878 1.96 3.932 6.136 7.074 11.245 7.074 6.501 0 11.331-3.293 13.248-8.755h-7.506c-1.084 1.893-2.59 2.962-5.187 2.962z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default InternetExplorerIcon;
/* prettier-ignore-end */
