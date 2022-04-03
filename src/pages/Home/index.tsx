import * as React from 'react';
import './Home.scss';

const Home = () => {
  return (
    <div className="home">
      Template
      {JSON.stringify(process.env)}
    </div>
  );
}

export default Home;
