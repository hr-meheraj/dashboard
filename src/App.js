import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import DashboardTwo from "./pages/DashboardTwo/DashboardTwo";
import MainPage from "./pages/Mainpage/MainPage";
import NotFound from "./pages/NotFound/NotFound";
function App() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Routes>
        <Route path='/' element={<Dashboard/>}>
            <Route index element={<MainPage/>}/>
            <Route path='*' element={<NotFound/>}/>
            <Route path='/dashboard-two' element={<DashboardTwo/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
