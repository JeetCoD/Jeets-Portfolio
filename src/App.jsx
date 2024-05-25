import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomeScreen } from "./Pages/HomeScreen";
import { ToastContainer } from "react-toastify";
import Projects from "./Pages/Projects";
import PageNotFound from "./Pages/PageNotFound";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          duration: 3000,
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "14px",
            padding: "4px 8px",
            maxWidth: "500px",
            backgroundColor: "#f1f5f9",
            color: "#020617",
          },
        }}
      />
    </>
  );
}

export default App;
