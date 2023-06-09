import 'bootstrap/dist/css/bootstrap.css';
import App from 'next/app';

import { useEffect } from 'react';
import buildClient from '@/api/build-client';
import Header from '../components/header';

export default function CustomApp({ Component, pageProps, currentUser }) {
  return (
    <div>
      <Header currentUser={currentUser} />
      <main className="container">
        <Component {...pageProps} currentUser={currentUser} />
      </main>
      <footer />
    </div>
  );
}

CustomApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);

  const client = buildClient(appContext.ctx);
  const { data } = await client.get('/api/users/currentuser');

  return {
    ...appProps,
    currentUser: data.currentUser ? data.currentUser : null,
  };
};
