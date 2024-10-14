export * from "./auth.type";
export * from "./category.type";
export * from "./payment.type";
export * from "./post.type";
export * from "./subscription.type";
export * from "./user.type";

import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};
