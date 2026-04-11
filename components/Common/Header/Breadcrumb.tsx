import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { capitalize } from "@/utils/helpers";

import BreadcrumbItem from "./BreadcrumbItem";

interface IBreadcrumb {
  href: string;
  label: string;
  isCurrent: boolean;
}

import AvatarJPG from "public/static/images/avatar.jpg";
import NextImage from "next/image";

const Breadcrumb = (): JSX.Element => {
  const { asPath } = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState<IBreadcrumb[]>([]);

  useEffect(() => {
    const path = asPath.replace(/#.*/, "");

    const pathWithoutQuery = path.split("?")[0];
    let pathArray = pathWithoutQuery.split("/");
    pathArray.shift();
    pathArray = pathArray.filter(path => path !== "");

    const breadcrumbs = pathArray.map((path, index) => {
      const href = "/" + pathArray.slice(0, index + 1).join("/");
      return {
        href,
        label: capitalize(path),
        isCurrent: index === pathArray.length - 1,
      };
    });

    setBreadcrumbs(breadcrumbs);
  }, [asPath]);

  return (
    <ol aria-label="breadcrumb" className="flex items-center space-x-2">
      <BreadcrumbItem href="/" isRoot>
        <div className="relative h-6 w-6 overflow-hidden rounded-full border border-tertiary">
          <NextImage
            src={AvatarJPG}
            layout="fill"
            placeholder="blur"
            alt="Gnaneshwar R L"
          />
        </div>
      </BreadcrumbItem>
      {breadcrumbs &&
        breadcrumbs.map(({ href, label, isCurrent }) => (
          <BreadcrumbItem href={href} isCurrent={isCurrent} key={href}>
            {label}
          </BreadcrumbItem>
        ))}
    </ol>
  );
};

export default Breadcrumb;
