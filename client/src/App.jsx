/* eslint-disable no-unused-vars */
import { useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {
  Register,
  Login,
  DashboardLayout,
  ChangePassword,
  Profile,
  Stats,
  AllStudents,
  EditStudent,
  AddStudent,
  GetAllCustoms,
  EditCustomField,
  AddCustomField,
} from "./pages";

const queryClient = new QueryClient();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              isLoggedIn ? (
                <Navigate to="/dashboard" replace />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route path="register" element={<Register />} />
          <Route exact path="login" element={<Login />} />
          <Route path="dashboard/*" element={<DashboardLayout />}>
            <Route index element={<Stats />} />
            <Route path="students" element={<AllStudents />} />
            <Route path="settings" element={<GetAllCustoms />} />
            <Route path="settings/addCustom" element={<AddCustomField />} />
            <Route path="addStudent" element={<AddStudent />} />

            <Route path="students/:studentId" element={<EditStudent />} />
            <Route path="settings/:customId" element={<EditCustomField />} />
            <Route
              path="profile/update-password"
              element={<ChangePassword />}
            />
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default App;
