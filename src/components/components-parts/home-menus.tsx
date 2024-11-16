
import { UrlObject } from "url";
import {
  AmbulanceIcon,
  EducationIcon,
  HospitalIcon
} from "@/components/assets/icons";
import { PERIKSA_ANAK, DATA_ANAK, FAQ, HOME, TAMBAH_DATA_ANAK } from "@/helpers/constants/path";
import { HiOutlineFolder, HiOutlineHome, HiOutlineSearch } from "react-icons/hi";
import { RiUserSettingsLine, RiUserSharedLine, RiUserAddLine  } from "react-icons/ri";

export interface HomeMenuItem {
  name: string;
  href: UrlObject | string;
  icon: React.ComponentType<React.ComponentProps<"svg">>;
  external?: boolean;
}

export const homeMenus: HomeMenuItem[] = [
  {
    name: "Periksa Anak",
    href: PERIKSA_ANAK,
    icon: HiOutlineSearch,
  },
  {
    name: "Tambah Data Anak",
    href: TAMBAH_DATA_ANAK,
    icon: RiUserAddLine,
  },
  {
    name: "Data Anak",
    href: DATA_ANAK,
    icon: HiOutlineFolder,
  },
  // {
  //   name: "Info Oksigen",
  //   href: "/provinces?kebutuhan=Oksigen",
  //   icon: OxygenIcon,
  // },
  // {
  //   name: "Donor Plasma",
  //   href: "/provinces?kebutuhan=Donor%20plasma",
  //   icon: DonorIcon,
  // },
  // {
  //   name: "Edukasi",
  //   href: "/edukasi",
  //   icon: EducationIcon,
  // },
  {
    name: "Edukasi",
    href: FAQ,
    icon: EducationIcon,
  },
  // {
  //   name: "Donasi",
  //   href: "/donasi",
  //   icon: DonationIcon,
  // },
  // {
  //   name: "Kontribusi",
  //   href: "https://www.indorelawan.org/activity/60e2ed45164da80018b0e246",
  //   icon: ContributionIcon,
  //   external: true,
  // },
  // {
  //   name: "LBH",
  //   href: "/lbh",
  //   icon: LegalIcon,
  // },
];

export interface NavigationItem {
  name: string;
  icon: React.ComponentType<React.ComponentProps<"svg">>;
  href: string;
  exact?: boolean;
  external?: boolean;
  isLogged?: boolean;
}

export type NavMenuItem = Omit<NavigationItem, "icon">;

export const bottomNavigation: NavigationItem[] = [
  {
    name: "Beranda",
    icon: HiOutlineHome,
    href: HOME,
    exact: true,
  },
  {
    name: "Data Anak",
    icon: HiOutlineFolder,
    href: DATA_ANAK,
  },
  {
    name: "Periksa Anak",
    icon: HiOutlineSearch,
    href: PERIKSA_ANAK,
  },
  {
    name: "Edukasi",
    icon: EducationIcon,
    href: FAQ,
  },
  // {
  //   name: "Info Umum",
  //   icon: HiOutlineViewGrid,
  //   href: "/faq",
  // },
  {
    name: "Login",
    icon: RiUserSharedLine,
    href: '/login',
    isLogged: false,
  },
  {
    name: "Profil",
    icon: RiUserSettingsLine ,
    href: '/profile',
    isLogged: true,
  }
];
