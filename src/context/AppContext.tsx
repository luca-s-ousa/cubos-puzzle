import { ReactNode, createContext, useContext } from "react";

type Props = {
  value: any;
  children: ReactNode;
};

export const AppContext = createContext({});

export const AppContextProvider = ({ children, value }: Props) => {
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
