import { Route, Routes, BrowserRouter } from "react-router-dom";
import {RecipesContextProvider} from "./Contexts/RecipesContext";
import {QueryContextProvider} from "./Contexts/QueryContext";
import {LoadingContextProvider} from "./Contexts/LoadingContext";
import Home from "./components/Home/Home"
import Details from "./components/RecipesDetails/Details"
import Footer from "./components/Footer/Footer"
import Navbar from "./components/NavBar/NavBar"
import "./App.css"


function App () {
return(
  <div>
  <Navbar/>
  <RecipesContextProvider>
  <QueryContextProvider>
  <LoadingContextProvider>
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/:id" element={<Details />} />
  </Routes>
  </BrowserRouter>
  </LoadingContextProvider>
  </QueryContextProvider>
  </RecipesContextProvider>
  <Footer/>
  </div>
)


}

export default App