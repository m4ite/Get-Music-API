import AddPage from "./pages/AddPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
   <>
   
      <Routes>
        <Route path='/' element={<AddPage />} />
      </Routes>

   </>
  );
}

export default App;
