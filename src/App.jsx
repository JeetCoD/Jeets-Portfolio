import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomeScreen } from "./Pages/HomeScreen";
import { ToastContainer } from "react-toastify";
import Projects from "./Pages/Projects";
import PageNotFound from "./Pages/PageNotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='*' element={<PageNotFound/>} />
        </Routes>
      </BrowserRouter>
     
    </>
  );
}

export default App;
