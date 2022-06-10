import React, {ReactNode} from "react";
import { ThemeContextProvider } from "../contexts/ThemeContext";

interface Props { 
  children?: ReactNode
 }

const Providers = ({ children }: Props) => {
  return (
    <ThemeContextProvider>
      {children}
    </ThemeContextProvider>
  );
};

export default Providers;
