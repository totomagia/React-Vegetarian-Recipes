import React, {createContext, useState} from 'react';

export const QueryContext= createContext();

export function QueryContextProvider (props) {
    
    const [query,setQuery] = useState('Vegetarian');

    
    return ( 
        <QueryContext.Provider value={[query, setQuery]}>
            {props.children}
        </QueryContext.Provider>
     );
}
 
export default QueryContextProvider;
