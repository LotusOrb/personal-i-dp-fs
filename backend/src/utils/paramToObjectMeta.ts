import { MetaType } from "../types/meta.type";

export const paramToObjectMeta = (arg: URLSearchParams) => {
  const mappedObj: MetaType = {
    page: parseInt(arg.get("page") || "0"),
    size: parseInt(arg.get("size") || "0"),
  };
  const tmpFilter = arg.get('filter')

  return {
    page: 0,
    size: 0,
    filter: Object,
  };
};
