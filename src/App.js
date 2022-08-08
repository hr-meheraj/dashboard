import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import MainPage from "./pages/Mainpage/MainPage";

function App() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Routes>
        <Route path='/' element={<Dashboard/>}>
            <Route index element={<MainPage/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
