import { MDXComponents } from "mdx/types";
import Link from "@/components/Shared/Link";
import { cloneElement, useRef } from "react";

const CodeBlock = ({ children, ...props }: any) => {
  const codeRef = useRef<HTMLElement>(null);

  // Filter out dangerouslySetInnerHTML from props to prevent conflict with children
  const { dangerouslySetInnerHTML, ...rest } = props;

  return (
    <div style={{ position: "relative", overflow: "auto" }}>
      <pre {...rest}>
        {cloneElement(children as React.ReactElement, { ref: codeRef })}
      </pre>
    </div>
  );
};

const BlogImage = props => {
  return <img {...props} className="my-8 rounded-md" />;
};

const BlogLink = props => {
  return <Link {...props} className="text-blue-400 hover:text-blue-300" />;
};

const CustomMDXComponents: MDXComponents = {
  a: BlogLink,
  pre: CodeBlock,
  img: BlogImage,
};
export default CustomMDXComponents;
