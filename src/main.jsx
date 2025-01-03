import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Layout from './parts/Layout';
import HomePage from './page/Home_page';
import Login from './page/Loging';
import UserData from './page/UserData';
import AddNewUser from './getdata/AddNewUser';
import UpdateUser from './getdata/UpdateUser';
import SignUp from './page/signUp';
import ContactPage from './page/ContactPage';
import AddContactPage from './getdata/AddContactPage';

createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
      <Routes>
        {/* Main layout route */}
        <Route path="/" element={<Layout />}>
          {/* Nested routes */}
          <Route index element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/Home_page" element={<HomePage />} />
          <Route path="/UserData" element={<UserData />} />
          <Route path="/AddNewUser" element={<AddNewUser />} />
          <Route path="/UpdateUser/:id" element={<UpdateUser />} />
          <Route path="/ContactPage" element={<ContactPage />}/>
          <Route path="/AddContactPage" element={<AddContactPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);
