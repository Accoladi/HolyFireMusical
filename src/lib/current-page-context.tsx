"use client";

import { createContext, useContext } from "react";

const CurrentPageContext = createContext(0);

export const CurrentPageProvider = CurrentPageContext.Provider;

export function useCurrentPage() {
  return useContext(CurrentPageContext);
}
