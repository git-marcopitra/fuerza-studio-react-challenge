import { FC } from "react";

export interface IRouterData {
  path: string;
  Component: FC;
  auth?: boolean;
}