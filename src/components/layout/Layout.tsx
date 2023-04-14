import './Layout.css';

import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="Layout">
      <h1>Sickle Cell Donations</h1>
      <Outlet />
    </div>
  );
}

export default Layout;
