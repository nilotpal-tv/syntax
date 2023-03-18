import type { MetaFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';

export const meta: MetaFunction = () => {
  return {
    charset: 'utf-8',
    title: 'Syntax Podcast',
    viewport: 'width=device-width,initial-scale=1',
  };
};

const styles = {
  color: '#CDD3DD',
  fontWeight: 'bold',
  padding: '20px 50px',
  fontFamily: 'SF Mono',
  backgroundColor: '#0F172A',
} as React.CSSProperties;

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body style={styles}>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
