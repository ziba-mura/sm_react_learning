import React from 'react';
import TheHeader from './components/TheHeader';
// import MainTodo from './components/MainTodo';
import TheFooter from './components/TheFooter';

export const App = () => {
  return (
    <div className="wrap">
      <TheHeader />
      <main className="main">
        {/* <MainTodo /> */}
      </main>
      <TheFooter />
    </div>
  );
}