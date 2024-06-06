import React from 'react';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function Layout() {
  const navigate = useNavigate()
  return (
    <div>
      <ul>
        <button onClick={()=>navigate('/shop')}>shop</button>
        <button onClick={()=>navigate('/')}>about</button>
        <button onClick={()=>navigate('/app')}>app</button>
        <button onClick={()=>navigate('/home')}>home</button>
        <button onClick={()=>navigate('/contect')}>contact</button>
        <button onClick={()=>navigate('/counter')}>counter</button>
        <button onClick={()=>navigate('/useEffect')}>useEffect</button>
      </ul>
      <Outlet />
    </div>
  );
}

export default Layout;
