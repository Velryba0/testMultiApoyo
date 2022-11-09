// Packages
import Head from "next/head";
import Image from "next/image";
import { useRouter } from 'next/router'
import React, { ReactNode, useEffect } from "react";
import { useSelector } from "react-redux";

// Styled Components
import { StyledLayoutMain } from './styledComponents'

// Selector
import { authToken } from "../../redux/features/auth/reducers";

type propsLayout = {
  children: ReactNode;
};

const Layout: React.FC<propsLayout> = ({ children }) => {
  const tokenData = useSelector(authToken)
  const router = useRouter()

  useEffect(() => {
    !tokenData.token && router.push('/login')
  }, [router, tokenData])

  return (
    <>
      <Head>
        <title>Multiapoyo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StyledLayoutMain>{children}</StyledLayoutMain>
      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Copyright 2022
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </>
  );
};

export default Layout;
