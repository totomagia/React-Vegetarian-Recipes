import { Route, Routes, BrowserRouter } from "react-router-dom";
import {RecipesContextProvider} from "./Contexts/RecipesContext";
import {QueryContextProvider} from "./Contexts/QueryContext"
import Home from "./components/Home"
import Details from "./components/Details"
import "./css/App.css"


function App () {
return(
  <div>
  <RecipesContextProvider>
  <QueryContextProvider>
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/:id" element={<Details />} />
  </Routes>
  </BrowserRouter>
  </QueryContextProvider>
  </RecipesContextProvider>
  </div>
 
)


}

export default App