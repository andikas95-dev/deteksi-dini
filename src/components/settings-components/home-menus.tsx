import { UrlObject } from "url";
import React from "react";

import {
  AmbulanceIcon,
  DonorIcon,
  HospitalIcon,
  OxygenIcon,
  DonationIcon,
  ContributionIcon,
  EducationIcon,
  LegalIcon,
} from "@/components/assets/icons/index";

export interface HomeMenuItem {
  name: string;
  href: UrlObject | string;
  icon: React.ComponentType<React.ComponentProps<"svg">>;
  external?: boolean;
}

export const homeMenus: HomeMenuItem[] = [
  {
    name: "Rumah Sakit",
    href: "/provinces?kebutuhan=Rumah%20sakit",
    icon: HospitalIcon,
  },
  {
    name: "Ambulans",
    href: "/provinces?kebutuhan=Ambulans",
    icon: AmbulanceIcon,
  },
  {
    name: "Info Oksigen",
    href: "/provinces?kebutuhan=Oksigen",
    icon: OxygenIcon,
  },
  {
    name: "Donor Plasma",
    href: "/provinces?kebutuhan=Donor%20plasma",
    icon: DonorIcon,
  },
  {
    name: "Edukasi",
    href: "/edukasi",
    icon: EducationIcon,
  },
  {
    name: "Donasi",
    href: "/donasi",
    icon: DonationIcon,
  },
  {
    name: "Kontribusi",
    href: "https://www.indorelawan.org/activity/60e2ed45164da80018b0e246",
    icon: ContributionIcon,
    external: true,
  },
  {
    name: "LBH",
    href: "/lbh",
    icon: LegalIcon,
  },
];
