import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import {AuthProvider} from "./contexts/AuthContext";
import ProtectedRoute from "./pages/ProtectedRoute";
import {TaskProvider} from "./contexts/TaskContext";

function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<SignUp/>}/>
          <Route path="/" element={
            <ProtectedRoute>
              <Home/>
            </ProtectedRoute>
            }/>
      </Routes>
      </TaskProvider>
    </AuthProvider>
  )
}

export default App;
