import React, { Children } from 'react';
import Header from '../Header';

interface Props {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({children}) => {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center">
        {children}
      </div>
    </>
  );
}

export default Layout;