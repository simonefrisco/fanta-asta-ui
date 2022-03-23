// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: xdSnfxWCziyzb8tBiGitqa
// Component: p3a1HfRCrQ1
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
import Divider from "../../Divider"; // plasmic-import: gQsAiY6bIFOZ/component

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_fantaasta.module.css"; // plasmic-import: xdSnfxWCziyzb8tBiGitqa/projectcss
import * as sty from "./PlasmicLoginFrom.module.css"; // plasmic-import: p3a1HfRCrQ1/css

export type PlasmicLoginFrom__VariantMembers = {
  arena: "arena";
};

export type PlasmicLoginFrom__VariantsArgs = {
  arena?: SingleBooleanChoiceArg<"arena">;
};

type VariantPropType = keyof PlasmicLoginFrom__VariantsArgs;
export const PlasmicLoginFrom__VariantProps = new Array<VariantPropType>(
  "arena"
);

export type PlasmicLoginFrom__ArgsType = {
  children?: React.ReactNode;
};

type ArgPropType = keyof PlasmicLoginFrom__ArgsType;
export const PlasmicLoginFrom__ArgProps = new Array<ArgPropType>("children");

export type PlasmicLoginFrom__OverridesType = {
  root?: p.Flex<"div">;
  divider?: p.Flex<typeof Divider>;
};

export interface DefaultLoginFromProps {
  children?: React.ReactNode;
  arena?: SingleBooleanChoiceArg<"arena">;
  className?: string;
}

function PlasmicLoginFrom__RenderFunc(props: {
  variants: PlasmicLoginFrom__VariantsArgs;
  args: PlasmicLoginFrom__ArgsType;
  overrides: PlasmicLoginFrom__OverridesType;
  dataFetches?: PlasmicLoginFrom__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root__arena]: hasVariant(variants, "arena", "arena")
      })}
    >
      <div
        className={classNames(defaultcss.all, sty.freeBox__oasnn, {
          [sty.freeBox__arena__oasnnek1T4]: hasVariant(
            variants,
            "arena",
            "arena"
          )
        })}
      >
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(defaultcss.all, sty.freeBox__aAo7, {
            [sty.freeBox__arena__aAo7Ek1T4]: hasVariant(
              variants,
              "arena",
              "arena"
            )
          })}
        >
          {(hasVariant(variants, "arena", "arena") ? true : true) ? (
            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.text__cPcOo,
                {
                  [sty.text__arena__cPcOOek1T4]: hasVariant(
                    variants,
                    "arena",
                    "arena"
                  )
                }
              )}
            >
              {"Sign up with"}
            </div>
          ) : null}

          <div
            className={classNames(defaultcss.all, sty.freeBox__pGslM, {
              [sty.freeBox__arena__pGslMek1T4]: hasVariant(
                variants,
                "arena",
                "arena"
              )
            })}
          >
            {p.renderPlasmicSlot({
              defaultContents: null,
              value: args.children
            })}
          </div>
        </p.Stack>

        <Divider
          data-plasmic-name={"divider"}
          data-plasmic-override={overrides.divider}
          className={classNames("__wab_instance", sty.divider)}
        />

        <div
          className={classNames(defaultcss.all, sty.freeBox__w6Xsc, {
            [sty.freeBox__arena__w6Xscek1T4]: hasVariant(
              variants,
              "arena",
              "arena"
            )
          })}
        >
          {(hasVariant(variants, "arena", "arena") ? true : true) ? (
            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.text__z2OwR,
                {
                  [sty.text__arena__z2OwRek1T4]: hasVariant(
                    variants,
                    "arena",
                    "arena"
                  )
                }
              )}
            >
              {
                "A cras sagittis odio vestibulum pulvinar a eget hendrerit id vestibulum a leo sociosqu dictumst dictumst natoque magnis parturient."
              }
            </div>
          ) : null}
        </div>
      </div>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "divider"],
  divider: ["divider"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  divider: typeof Divider;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicLoginFrom__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicLoginFrom__VariantsArgs;
    args?: PlasmicLoginFrom__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicLoginFrom__Fetches;
  } & Omit<PlasmicLoginFrom__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicLoginFrom__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicLoginFrom__ArgProps,
      internalVariantPropNames: PlasmicLoginFrom__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicLoginFrom__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLoginFrom";
  } else {
    func.displayName = `PlasmicLoginFrom.${nodeName}`;
  }
  return func;
}

export const PlasmicLoginFrom = Object.assign(
  // Top-level PlasmicLoginFrom renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    divider: makeNodeComponent("divider"),

    // Metadata about props expected for PlasmicLoginFrom
    internalVariantProps: PlasmicLoginFrom__VariantProps,
    internalArgProps: PlasmicLoginFrom__ArgProps
  }
);

export default PlasmicLoginFrom;
/* prettier-ignore-end */