import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Routes, Route } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute.jsx';
import Navbar from './components/Navbar.jsx'
import LoginPage from './pages/LoginPage.jsx';
import ProductPage from './pages/HomePage.jsx';
import ShowProductPage from './pages/ShowProductPage.jsx'

function App() {
  const queryClient = new QueryClient();


  return (
    <QueryClientProvider client={queryClient}>
      <Navbar/>
      <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<ProductPage />} />
          </Route>
        <Route path="/products/:productId" element={<ShowProductPage />} />
        <Route path="/login" element={ <LoginPage/> }/>
      </Routes>
    </QueryClientProvider>
  )
}

export default App
