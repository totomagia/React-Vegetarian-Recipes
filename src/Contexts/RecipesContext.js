import React, {createContext, useState} from 'react';

export const RecipesContext= createContext();

export function RecipesContextProvider (props) {
    
    const [recipes,setRecipes] = useState([]);

    
    return ( 
        <RecipesContext.Provider value={[recipes, setRecipes]}>
            {props.children}
        </RecipesContext.Provider>
     );
}
 
export default RecipesContextProvider;