import React from 'react';
import App from 'next/app';
import axios from 'axios';
import { parseCookies } from 'nookies';
import { redirectUser } from '../utils/auth';
import Layout from '../components/_App/Layout';
import '../public/styles/index.css';

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const { token } = parseCookies(ctx);

    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    if (!token) {
      const isProtectedRoute = ctx.pathname === '/portalhome';
      if (isProtectedRoute) {
        redirectUser(ctx, '/portal');
      }
    } else {
      try {
        const payload = { headers: { Authorization: token } };
        const url = 'http://localhost:3000/api/account';
        const response = await axios.get(url, payload);
        const user = response.data;
        pageProps.user = user;
      } catch (error) {
        console.error('Error getting current user', error);
      }
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Layout {...pageProps}>
        <Component {...pageProps} />
      </Layout>
    );
  }
}
