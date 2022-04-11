import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Auth, Feed, Record } from '../components';

const MainRouter = () => {
  return (
    <>
      <Routes>
        <Route path='/signin' element={<Auth isSignup={false} />} />
        <Route path='/signup' element={<Auth isSignup={true} />} />
        <Route path='/feed' element={<Feed userName={'혜준'} />} />
        <Route path='/record' element={<Record />} />
      </Routes>
    </>
  );
};

export default MainRouter;
