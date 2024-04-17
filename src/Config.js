import { createContext, useContext, useState } from 'react';
const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [usuario_id, setUsuario_id] = useState();
    //DESCOMENTAR PARA LOCAL
     const [baseUrl, setBaseUrl] = useState('http://localhost:8080/rest/rest/');
    //DESCOMENTAR PARA LOCAL

    return <GlobalContext.Provider value={{ baseUrl, setBaseUrl, isLoggedIn, setIsLoggedIn, usuario_id, setUsuario_id }}>{children}</GlobalContext.Provider>;
};

export default AppContext;
