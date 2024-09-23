import React from 'react';
import { HomePage } from './pages/Home/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LatestNewsPage } from './pages/LatestNews/LatestNewsPage';
import { AboutPage } from './pages/About/AboutPage';
import { BlogPage } from './pages/Blog/BlogPage';
import { ErrorPage } from './pages/Error/ErrorPage';
import MainLayout from "./components/MainLayout/MainLayout";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/latestNews" element={<LatestNewsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;