// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: xdSnfxWCziyzb8tBiGitqa
// Component: ZPtvWtdss9
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

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
import HeroSectionArena from "../../HeroSectionArena"; // plasmic-import: Uev3p9VZayM/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_fantaasta.module.css"; // plasmic-import: xdSnfxWCziyzb8tBiGitqa/projectcss
import sty from "./PlasmicApphome.module.css"; // plasmic-import: ZPtvWtdss9/css

export type PlasmicApphome__VariantMembers = {};

export type PlasmicApphome__VariantsArgs = {};
type VariantPropType = keyof PlasmicApphome__VariantsArgs;
export const PlasmicApphome__VariantProps = new Array<VariantPropType>();

export type PlasmicApphome__ArgsType = {};
type ArgPropType = keyof PlasmicApphome__ArgsType;
export const PlasmicApphome__ArgProps = new Array<ArgPropType>();

export type PlasmicApphome__OverridesType = {
  root?: p.Flex<"div">;
  heroSectionArena?: p.Flex<typeof HeroSectionArena>;
};

export interface DefaultApphomeProps {}

function PlasmicApphome__RenderFunc(props: {
  variants: PlasmicApphome__VariantsArgs;
  args: PlasmicApphome__ArgsType;
  overrides: PlasmicApphome__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{"App"}</title>
        <meta key="og:title" property="og:title" content={"App"} />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          <HeroSectionArena
            data-plasmic-name={"heroSectionArena"}
            data-plasmic-override={overrides.heroSectionArena}
            className={classNames("__wab_instance", sty.heroSectionArena)}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "heroSectionArena"],
  heroSectionArena: ["heroSectionArena"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  heroSectionArena: typeof HeroSectionArena;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicApphome__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicApphome__VariantsArgs;
    args?: PlasmicApphome__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicApphome__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicApphome__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicApphome__ArgProps,
      internalVariantPropNames: PlasmicApphome__VariantProps
    });

    return PlasmicApphome__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicApphome";
  } else {
    func.displayName = `PlasmicApphome.${nodeName}`;
  }
  return func;
}

export const PlasmicApphome = Object.assign(
  // Top-level PlasmicApphome renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    heroSectionArena: makeNodeComponent("heroSectionArena"),

    // Metadata about props expected for PlasmicApphome
    internalVariantProps: PlasmicApphome__VariantProps,
    internalArgProps: PlasmicApphome__ArgProps
  }
);

export default PlasmicApphome;
/* prettier-ignore-end */
