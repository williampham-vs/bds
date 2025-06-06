import { postSoldTypes, postRentTypes } from "@/lib/constant";
import { pathnames } from "@/lib/pathname";

const navigations = [
  {
    id: 1,
    name: "Nhà Đặt Bán",
    pathname: pathnames.public.soldPropety,
    hadSub: true,
    subs: postSoldTypes,
  },
  {
    id: 2,
    name: "Nhà cho thuê",
    pathname: pathnames.public.rentPropety,
    hadSub: true,
    subs: postRentTypes,
  },
  {
    id: 3,
    name: "Tin tức",
    pathname: pathnames.public.news,
    hadSub: false,
  },
];

export default navigations;
