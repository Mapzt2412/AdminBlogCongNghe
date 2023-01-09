import { createContext, useContext } from 'react';

export const Context = createContext({
    handleReload: () => {},
});

const useHomeContext = () => useContext(Context);

export default useHomeContext;