import Test from "./pages/Test";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import Dashboard from "./pages/Dashboard";
import Attendance from "./pages/Attendance";
import Leave from "./pages/Leave";
import Salary from "./pages/Salary";
import Policies from "./pages/Policies";
import Resignation from "./pages/Resignation";


function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <div className="flex items-center justify-center h-[50px] custom-header text-[#0b0a0a]">
          This is Header
        </div>
        <Routes>
          <Route path="/" element={<Test />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/leave" element={<Leave />} />
          <Route path="/salary" element={<Salary />} />
          <Route path="/policies" element={<Policies />} />
          <Route path="/resignation" element={<Resignation />} />
        </Routes>
        {/* <Test />
          <Dashboard/> */}
      </Router>
    </>
  );
}

export default App;
