import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NewsDetails from './pages/NewsDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news/:newsUrl" element={<NewsDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
