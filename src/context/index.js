import { createContext, useState } from 'react'

const IdContext = createContext()

function IdContextProvider({ children }) {
    const [id, setId] = useState(0);

    return (
        <IdContext.Provider value={{id, setId}}>
            {children}
        </IdContext.Provider>
    )
}

export { IdContext, IdContextProvider }