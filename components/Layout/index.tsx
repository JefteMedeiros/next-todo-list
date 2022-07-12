import React from "react";
import Head from "next/head";
import Header from "../Header";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Next.js Todo-list</title>
      </Head>
      <Header />
      <div className="flex flex-col items-center">{children}</div>
    </>
  );
};

export default Layout;
