import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage } from './pages/MainPage';
import { ThemeProvider } from 'styled-components';
import { theme } from './Theme';

function App() {
  return (
    <div className="App">
      <ThemeProvider  theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<MainPage />}></Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
