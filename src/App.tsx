import { Routes, Route } from 'react-router-dom';
import { Donate, Donation, Error } from './pages';
import { Layout } from './components';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Donate />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}

export default App;
