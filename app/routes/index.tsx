import { Link } from '@remix-run/react';

const HomePage = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
      <h1>The Syntax Podcast</h1>
      <Link to="/syntax">Syntax Podcast</Link>
    </div>
  );
};

export default HomePage;
