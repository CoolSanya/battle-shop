
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/Home';
import LoginPage from './components/auth/Login';
import RegisterPage from './components/auth/Register';
import DefaultLayout from './components/containers/DefaultLayout';
import AdminLayout from './components/containers/AdminLayout';
import NoMatch from './components/NoMatch';
import ProductsListPage from './components/products/List';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<HomePage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="products/list" element={<ProductsListPage />} />
            
            <Route path="*" element={<NoMatch />} />
          </Route>

          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<RegisterPage />} />

            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
