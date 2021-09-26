// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: xdSnfxWCziyzb8tBiGitqa
// Component: JGXUTtU5D6Eq
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_fantaasta.module.css"; // plasmic-import: xdSnfxWCziyzb8tBiGitqa/projectcss
import * as sty from "./PlasmicSettingInput.module.css"; // plasmic-import: JGXUTtU5D6Eq/css

export type PlasmicSettingInput__VariantMembers = {
  state: "completed" | "editing";
};

export type PlasmicSettingInput__VariantsArgs = {
  state?: MultiChoiceArg<"completed" | "editing">;
};

type VariantPropType = keyof PlasmicSettingInput__VariantsArgs;
export const PlasmicSettingInput__VariantProps = new Array<VariantPropType>(
  "state"
);

export type PlasmicSettingInput__ArgsType = {
  children?: React.ReactNode;
  slot?: React.ReactNode;
};

type ArgPropType = keyof PlasmicSettingInput__ArgsType;
export const PlasmicSettingInput__ArgProps = new Array<ArgPropType>(
  "children",
  "slot"
);

export type PlasmicSettingInput__OverridesType = {
  root?: p.Flex<"div">;
  textbox?: p.Flex<"input">;
};

export interface DefaultSettingInputProps {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  state?: MultiChoiceArg<"completed" | "editing">;
  className?: string;
}

function PlasmicSettingInput__RenderFunc(props: {
  variants: PlasmicSettingInput__VariantsArgs;
  args: PlasmicSettingInput__ArgsType;
  overrides: PlasmicSettingInput__OverridesType;
  dataFetches?: PlasmicSettingInput__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root__state_completed]: hasVariant(variants, "state", "completed"),
        [sty.root__state_editing]: hasVariant(variants, "state", "editing")
      })}
    >
      {p.renderPlasmicSlot({
        defaultContents: "Name Setting",
        value: args.slot
      })}

      <div className={classNames(defaultcss.all, sty.freeBox__opf9F)}>
        <div className={classNames(defaultcss.all, sty.freeBox__dgZ2K)}>
          {(hasVariant(variants, "state", "editing") ? true : true)
            ? p.renderPlasmicSlot({
                defaultContents: "Enter some text",
                value: args.children,
                className: classNames(sty.slotTargetChildren, {
                  [sty.slotTargetChildren__state_completed]: hasVariant(
                    variants,
                    "state",
                    "completed"
                  ),
                  [sty.slotTargetChildren__state_editing]: hasVariant(
                    variants,
                    "state",
                    "editing"
                  )
                })
              })
            : null}
        </div>

        {(hasVariant(variants, "state", "editing") ? true : true) ? (
          <input
            data-plasmic-name={"textbox"}
            data-plasmic-override={overrides.textbox}
            className={classNames(defaultcss.input, sty.textbox, {
              [sty.textbox__state_editing]: hasVariant(
                variants,
                "state",
                "editing"
              )
            })}
            placeholder={"Some placeholder" as const}
            size={1 as const}
            type={"text" as const}
            value={"Some value" as const}
          />
        ) : null}
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "textbox"],
  textbox: ["textbox"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  textbox: "input";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSettingInput__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSettingInput__VariantsArgs;
    args?: PlasmicSettingInput__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicSettingInput__Fetches;
  } & Omit<PlasmicSettingInput__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicSettingInput__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicSettingInput__ArgProps,
      internalVariantPropNames: PlasmicSettingInput__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicSettingInput__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSettingInput";
  } else {
    func.displayName = `PlasmicSettingInput.${nodeName}`;
  }
  return func;
}

export const PlasmicSettingInput = Object.assign(
  // Top-level PlasmicSettingInput renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    textbox: makeNodeComponent("textbox"),

    // Metadata about props expected for PlasmicSettingInput
    internalVariantProps: PlasmicSettingInput__VariantProps,
    internalArgProps: PlasmicSettingInput__ArgProps
  }
);

export default PlasmicSettingInput;
/* prettier-ignore-end */
