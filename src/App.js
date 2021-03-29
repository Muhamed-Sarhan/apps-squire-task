import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import HomePage from './components/HomePage';
import Update from './components/UpdatePost';
import Add from './components/AddPost';
import LoadingPage from './components/LoadingPage';
import NotFound from './components/404';
// import LoadingPage from './components/LoadingPage';

function App() {
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setToken(token);
  }, [token]);

  if (loading) {
    return <LoadingPage setIsLoading={setLoading} />;
  }
  if (!token) {
    return (
      <main className='container'>
        <Login setToken={setToken} setToken={setToken} />;
      </main>
    );
  }

  return (
    <main className='container'>
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/add' component={Add} />
          <Route path='/update/:id' component={Update} />
          <Route path='*' component={NotFound} />
        </Switch>
      </Router>
    </main>
  );
}

export default App;
