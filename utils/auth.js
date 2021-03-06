import cookie from 'js-cookie';
import Router from 'next/router';

export const handleLogin = token => {
  cookie.set('token', token);
  Router.push('/portalhome');
};

export const redirectUser = (ctx, location) => {
  if (ctx.req) {
    ctx.res.writeHead(302, { Location: location });
    ctx.res.end();
  } else {
    Router.push(location);
  }
};
