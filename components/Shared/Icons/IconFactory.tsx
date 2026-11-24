import { SVGProps } from "react";
import {
  X,
  Shield,
  ShoppingCart,
  Activity,
  UserCheck,
  Eye,
  Calendar,
} from "react-feather";

import {
  NextJSLogo,
  TypescriptLogo,
  XdoXLogo,
  ReactLogo,
  FigmaLogo,
  GoLogo,
  TailwindCSSLogo,
  NotigerLogo,
  TwNFTLogo,
  SecliLogo,
  PayPeerLogo,
} from ".";
import StorliLogo from "./Storli";

interface IconFactoryProps extends SVGProps<SVGSVGElement> {
  name: string;
}

const IconFactory = ({
  name,
  ...otherProps
}: IconFactoryProps): JSX.Element => {
  switch (name) {
    case "nextjs":
      return <NextJSLogo {...otherProps} />;
    case "typescript":
      return <TypescriptLogo {...otherProps} />;
    case "xdox":
      return <XdoXLogo {...otherProps} />;
    case "figma":
      return <FigmaLogo {...otherProps} />;
    case "tailwindcss":
      return <TailwindCSSLogo {...otherProps} />;
    case "go":
      return <GoLogo {...otherProps} />;
    case "react":
      return <ReactLogo {...otherProps} />;
    case "notiger":
      return <NotigerLogo {...otherProps} />;
    case "twnft":
      return <TwNFTLogo {...otherProps} />;
    case "storli":
      return <StorliLogo {...otherProps} />;
    case "secli":
      return <SecliLogo {...otherProps} />;
    case "paypeer":
      return <PayPeerLogo {...otherProps} />;
    case "ethervault":
      return <Shield {...otherProps} />;
    case "gkart":
      return <ShoppingCart {...otherProps} />;
    case "fitness":
      return <Activity {...otherProps} />;
    case "signlanguage":
      return <Eye {...otherProps} />;
    case "identity":
      return <UserCheck {...otherProps} />;
    case "eventmate":
      return <Calendar {...otherProps} />;
    case "plantdisease":
      return <Activity {...otherProps} />;
    default:
      return <X />;
  }
};

export default IconFactory;
