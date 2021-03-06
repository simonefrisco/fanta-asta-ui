// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: xdSnfxWCziyzb8tBiGitqa
// Component: oE_8Qzvao0GQ
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
import Navigation from "../../Navigation"; // plasmic-import: 3pqoTJs_Sosu/component
import Button from "../../Button"; // plasmic-import: ILa2cLxyoTg0/component
import LoginForm from "../../LoginForm"; // plasmic-import: p3a1HfRCrQ1/component

import { useScreenVariants as useScreenVariantsfKkpFikCuog } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: F-KkpFIKCuog/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_fantaasta.module.css"; // plasmic-import: xdSnfxWCziyzb8tBiGitqa/projectcss
import sty from "./PlasmicHeroSection2.module.css"; // plasmic-import: oE_8Qzvao0GQ/css

export type PlasmicHeroSection2__VariantMembers = {};

export type PlasmicHeroSection2__VariantsArgs = {};
type VariantPropType = keyof PlasmicHeroSection2__VariantsArgs;
export const PlasmicHeroSection2__VariantProps = new Array<VariantPropType>();

export type PlasmicHeroSection2__ArgsType = {
  foreground?: React.ReactNode;
  children?: React.ReactNode;
};

type ArgPropType = keyof PlasmicHeroSection2__ArgsType;
export const PlasmicHeroSection2__ArgProps = new Array<ArgPropType>(
  "foreground",
  "children"
);

export type PlasmicHeroSection2__OverridesType = {
  root?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
  hero3?: p.Flex<"div">;
  img?: p.Flex<typeof p.PlasmicImg>;
  background3?: p.Flex<"div">;
  foreground?: p.Flex<"div">;
};

export interface DefaultHeroSection2Props {
  foreground?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

function PlasmicHeroSection2__RenderFunc(props: {
  variants: PlasmicHeroSection2__VariantsArgs;
  args: PlasmicHeroSection2__ArgsType;
  overrides: PlasmicHeroSection2__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsfKkpFikCuog()
  });

  return (
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
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <Navigation
              className={classNames("__wab_instance", sty.navigation___460Ym)}
              hideCta={true}
              slot={
                <React.Fragment>
                  <p.PlasmicLink
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      projectcss.__wab_text,
                      sty.link__mD8B
                    )}
                    component={Link}
                    href={"/app/home" as const}
                    platform={"nextjs"}
                  >
                    {"Asta Home"}
                  </p.PlasmicLink>

                  <Button
                    children2={
                      <svg
                        className={classNames(projectcss.all, sty.svg__dNYd)}
                        role={"img"}
                      />
                    }
                    className={classNames("__wab_instance", sty.button__nXlw5)}
                    link={"/app/home" as const}
                    navLink={true}
                    slot={"Arena"}
                  >
                    <svg
                      className={classNames(projectcss.all, sty.svg__lqoJp)}
                      role={"img"}
                    />
                  </Button>

                  <Button
                    children2={
                      <svg
                        className={classNames(projectcss.all, sty.svg__qcQzJ)}
                        role={"img"}
                      />
                    }
                    className={classNames("__wab_instance", sty.button__gwfQ)}
                    navLink={true}
                    slot={"Features"}
                  >
                    <svg
                      className={classNames(projectcss.all, sty.svg__tZfNr)}
                      role={"img"}
                    />
                  </Button>

                  <Button
                    children2={
                      <svg
                        className={classNames(projectcss.all, sty.svg__toGf9)}
                        role={"img"}
                      />
                    }
                    className={classNames("__wab_instance", sty.button__rua24)}
                    navLink={true}
                    slot={"Company"}
                  >
                    <svg
                      className={classNames(projectcss.all, sty.svg___4Eo5Z)}
                      role={"img"}
                    />
                  </Button>

                  <Button
                    children2={
                      <svg
                        className={classNames(projectcss.all, sty.svg___86TWa)}
                        role={"img"}
                      />
                    }
                    className={classNames("__wab_instance", sty.button__aJvil)}
                    navLink={true}
                    slot={"Contact"}
                  >
                    <svg
                      className={classNames(projectcss.all, sty.svg__kcv0F)}
                      role={"img"}
                    />
                  </Button>

                  <Button
                    children2={
                      <svg
                        className={classNames(projectcss.all, sty.svg__iYwbF)}
                        role={"img"}
                      />
                    }
                    className={classNames("__wab_instance", sty.button___0MUka)}
                    navLink={true}
                    slot={"Log in"}
                  >
                    <svg
                      className={classNames(projectcss.all, sty.svg__ptrpz)}
                      role={"img"}
                    />
                  </Button>

                  <Button
                    children2={
                      <svg
                        className={classNames(projectcss.all, sty.svg___0P9Sh)}
                        role={"img"}
                      />
                    }
                    className={classNames("__wab_instance", sty.button__o2Wxk)}
                    darkGray={true}
                    slot={"Sign up"}
                  >
                    <svg
                      className={classNames(projectcss.all, sty.svg__ySjgS)}
                      role={"img"}
                    />
                  </Button>
                </React.Fragment>
              }
            >
              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__srl6G)}
                displayHeight={"auto" as const}
                displayMaxHeight={"none" as const}
                displayMaxWidth={"none" as const}
                displayMinHeight={"0" as const}
                displayMinWidth={"0" as const}
                displayWidth={"40px" as const}
                src={{
                  src: "/plasmic/fantaasta/images/image13.svg",
                  fullWidth: 150,
                  fullHeight: 150,
                  aspectRatio: 1
                }}
              />
            </Navigation>
          ),

          value: args.children
        })}
      </div>

      <div
        data-plasmic-name={"hero3"}
        data-plasmic-override={overrides.hero3}
        className={classNames(projectcss.all, sty.hero3)}
      >
        <p.PlasmicImg
          data-plasmic-name={"img"}
          data-plasmic-override={overrides.img}
          alt={""}
          className={classNames(sty.img)}
          displayHeight={"100%" as const}
          displayMaxHeight={"none" as const}
          displayMaxWidth={"none" as const}
          displayMinHeight={"0" as const}
          displayMinWidth={"0" as const}
          displayWidth={"100%" as const}
          src={
            "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1834&q=80" as const
          }
        />

        <div
          data-plasmic-name={"background3"}
          data-plasmic-override={overrides.background3}
          className={classNames(projectcss.all, sty.background3)}
        />

        <p.Stack
          as={"div"}
          data-plasmic-name={"foreground"}
          data-plasmic-override={overrides.foreground}
          hasGap={true}
          className={classNames(projectcss.all, sty.foreground)}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <React.Fragment>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__ok3Wp)}
                >
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__yh8Hu)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        sty.freeBox___8M1J6
                      )}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__sVcfQ
                        )}
                      >
                        {"Updated!"}
                      </div>
                    </div>

                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__lxyfm
                      )}
                    >
                      <React.Fragment>
                        <React.Fragment>{"Designs that "}</React.Fragment>
                        <span
                          className={
                            "plasmic_default__all plasmic_default__span"
                          }
                          style={{ textDecoration: "underline" }}
                        >
                          {"adapt"}
                        </span>
                        <React.Fragment>{""}</React.Fragment>
                      </React.Fragment>
                    </div>

                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__o1YTl
                      )}
                    >
                      {
                        "Orci dui condimentum rutrum laoreet hac purus porta sem sem a vivamus a posuere vel molestie."
                      }
                    </div>
                  </p.Stack>

                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__ibDuw)}
                  >
                    <Button
                      children2={
                        <svg
                          className={classNames(projectcss.all, sty.svg__hu36O)}
                          role={"img"}
                        />
                      }
                      className={classNames(
                        "__wab_instance",
                        sty.button___6A6Kl
                      )}
                      darkGray={true}
                      slot={
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__mnZdE
                          )}
                        >
                          {"Start now ->"}
                        </div>
                      }
                    >
                      <svg
                        className={classNames(projectcss.all, sty.svg__y2Bn)}
                        role={"img"}
                      />
                    </Button>

                    <Button
                      bgDifference={true}
                      children2={
                        <svg
                          className={classNames(projectcss.all, sty.svg__snD4)}
                          role={"img"}
                        />
                      }
                      className={classNames("__wab_instance", sty.button__nWaO)}
                      darkGray={true}
                      slot={
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__my45
                          )}
                        >
                          {"Learn more???"}
                        </div>
                      }
                    >
                      <svg
                        className={classNames(projectcss.all, sty.svg__qcuM)}
                        role={"img"}
                      />
                    </Button>
                  </p.Stack>
                </p.Stack>

                <LoginForm
                  className={classNames("__wab_instance", sty.loginForm__dLqi0)}
                />
              </React.Fragment>
            ),
            value: args.foreground
          })}
        </p.Stack>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "hero3", "img", "background3", "foreground"],
  freeBox: ["freeBox"],
  hero3: ["hero3", "img", "background3", "foreground"],
  img: ["img"],
  background3: ["background3"],
  foreground: ["foreground"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
  hero3: "div";
  img: typeof p.PlasmicImg;
  background3: "div";
  foreground: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHeroSection2__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHeroSection2__VariantsArgs;
    args?: PlasmicHeroSection2__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHeroSection2__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicHeroSection2__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicHeroSection2__ArgProps,
      internalVariantPropNames: PlasmicHeroSection2__VariantProps
    });

    return PlasmicHeroSection2__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHeroSection2";
  } else {
    func.displayName = `PlasmicHeroSection2.${nodeName}`;
  }
  return func;
}

export const PlasmicHeroSection2 = Object.assign(
  // Top-level PlasmicHeroSection2 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    hero3: makeNodeComponent("hero3"),
    img: makeNodeComponent("img"),
    background3: makeNodeComponent("background3"),
    foreground: makeNodeComponent("foreground"),

    // Metadata about props expected for PlasmicHeroSection2
    internalVariantProps: PlasmicHeroSection2__VariantProps,
    internalArgProps: PlasmicHeroSection2__ArgProps
  }
);

export default PlasmicHeroSection2;
/* prettier-ignore-end */
