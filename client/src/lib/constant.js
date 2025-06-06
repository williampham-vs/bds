import slugify from "slugify";

export const postSoldTypes = [
  "Căn hộ chung cư",
  "Nhà Mặt Phố",
  "Nhà riêng",
  "Nhà phố thương mại",
  "Biệt thự",
  "Đất nền",
  "Bán đất",
  "Trang trại",
  "Khu nghỉ dưỡng",
  "Kho",
  "Nhà xưởng",
  "Khác",
].map((el) => ({ name: el, pathname: slugify(el) }));

export const postRentTypes = [
  "Căn hộ chung cư",
  "Nhà Mặt Phố",
  "Nhà riêng",
  "Nhà phố thương mại",
  "Biệt thự",
  "Đất nền",
  "Bán đất",
  "Trang trại",
  "Khu nghỉ dưỡng",
  "Kho",
  "Nhà xưởng",
  "Khác",
].map((el) => ({ name: el, pathname: slugify(el) }));
