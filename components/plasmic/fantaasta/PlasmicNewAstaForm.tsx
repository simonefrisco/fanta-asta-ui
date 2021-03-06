// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: xdSnfxWCziyzb8tBiGitqa
// Component: wfDe24iI-Nf
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
import SettingInput from "../../SettingInput"; // plasmic-import: JGXUTtU5D6Eq/component
import Button from "../../Button"; // plasmic-import: ILa2cLxyoTg0/component

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_fantaasta.module.css"; // plasmic-import: xdSnfxWCziyzb8tBiGitqa/projectcss
import * as sty from "./PlasmicNewAstaForm.module.css"; // plasmic-import: wfDe24iI-Nf/css

import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: Gng1eaWxMrAo/icon

export type PlasmicNewAstaForm__VariantMembers = {
  state: "empty" | "completed";
};

export type PlasmicNewAstaForm__VariantsArgs = {
  state?: MultiChoiceArg<"empty" | "completed">;
};

type VariantPropType = keyof PlasmicNewAstaForm__VariantsArgs;
export const PlasmicNewAstaForm__VariantProps = new Array<VariantPropType>(
  "state"
);

export type PlasmicNewAstaForm__ArgsType = {};
type ArgPropType = keyof PlasmicNewAstaForm__ArgsType;
export const PlasmicNewAstaForm__ArgProps = new Array<ArgPropType>();

export type PlasmicNewAstaForm__OverridesType = {
  root?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
  button?: p.Flex<typeof Button>;
};

export interface DefaultNewAstaFormProps {
  state?: MultiChoiceArg<"empty" | "completed">;
  className?: string;
}

function PlasmicNewAstaForm__RenderFunc(props: {
  variants: PlasmicNewAstaForm__VariantsArgs;
  args: PlasmicNewAstaForm__ArgsType;
  overrides: PlasmicNewAstaForm__OverridesType;
  dataFetches?: PlasmicNewAstaForm__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        hasGap={true}
        className={classNames(defaultcss.all, sty.freeBox)}
      >
        <SettingInput
          className={classNames("__wab_instance", sty.settingInput__s2Efj)}
          slot={"Nome Asta"}
        >
          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.text__bWlhn
            )}
          >
            {"Enter some text"}
          </div>
        </SettingInput>

        <SettingInput
          className={classNames("__wab_instance", sty.settingInput___1PKpq)}
          slot={"Numero Partecipanti"}
        />

        <SettingInput
          className={classNames("__wab_instance", sty.settingInput__zT)}
          slot={"Budget Iniziale"}
        />

        <div
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.text__rjPT
          )}
        >
          {"Impostazioni Rose"}
        </div>

        <SettingInput
          className={classNames("__wab_instance", sty.settingInput__wkhZ)}
          slot={"Numero Totale Giocatori"}
        />

        <Button
          data-plasmic-name={"button"}
          data-plasmic-override={overrides.button}
          className={classNames("__wab_instance", sty.button)}
          colors={"indigo" as const}
          slot={
            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.text__xMAzY
              )}
            >
              {"Crea"}
            </div>
          }
        />
      </p.Stack>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "button"],
  freeBox: ["freeBox", "button"],
  button: ["button"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
  button: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicNewAstaForm__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNewAstaForm__VariantsArgs;
    args?: PlasmicNewAstaForm__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicNewAstaForm__Fetches;
  } & Omit<PlasmicNewAstaForm__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicNewAstaForm__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicNewAstaForm__ArgProps,
      internalVariantPropNames: PlasmicNewAstaForm__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicNewAstaForm__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNewAstaForm";
  } else {
    func.displayName = `PlasmicNewAstaForm.${nodeName}`;
  }
  return func;
}

export const PlasmicNewAstaForm = Object.assign(
  // Top-level PlasmicNewAstaForm renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    button: makeNodeComponent("button"),

    // Metadata about props expected for PlasmicNewAstaForm
    internalVariantProps: PlasmicNewAstaForm__VariantProps,
    internalArgProps: PlasmicNewAstaForm__ArgProps
  }
);

export default PlasmicNewAstaForm;
/* prettier-ignore-end */
