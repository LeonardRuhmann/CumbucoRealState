import { useState, createContext } from "react";
export const MenuContext = createContext();

// Esse MenuHamburguerContextProvider é para o navbar ter acesso ao valor booleano
// da função do MenuHamburguer, feito para ativar a classe de resolução mobile
export const MenuHamburguerContextProvider = ({ children }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <MenuContext.Provider value={{ menuIsOpen, setMenuIsOpen }}>
      {children}
    </MenuContext.Provider>
  );
};
