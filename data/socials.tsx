import { ReactNode } from "react";

import {
  GitHubLogo,
  LinkedInLogo,
  LeetCodeLogo,
} from "@/components/Shared/Icons";

interface Social {
  id: string;
  name: string;
  url: string;
  icon: ReactNode;
}

const socials: Social[] = [
  {
    id: "linkedin",
    name: "Linkedin",
    url: "https://linkedin.com/in/gnaneshwar86",
    icon: <LinkedInLogo color="#0A66C2" />,
  },
  {
    id: "github",
    name: "GitHub",
    url: "https://github.com/gnaneshwar86",
    icon: <GitHubLogo />,
  },
  {
    id: "leetcode",
    name: "LeetCode",
    url: "https://leetcode.com/u/gnaneshwar86",
    icon: <LeetCodeLogo color="#FFA116" />,
  },
];

export default socials;
