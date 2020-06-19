import { useState, useEffect } from 'react';
import Head from 'next/head';
const fetch = require('node-fetch');

export default function Home() {
  const [beachData, setBeachData] = useState([]);

  useEffect(() => {
    fetch('api/hello')
      .then((res) => res.text())
      .then((data) => setBeachData(JSON.parse(data)));
  }, []);

  return (
    <div>
      <Head>
        <title>Toronto Beach App</title>
      </Head>
      <main>
        <h1>
          Toronto Beach App
        </h1>
        {beachData.map((beach) => (
          <div>
            <h2>{beach.name}</h2>
            <b>{beach.eColiCount}</b>
            <div>{beach.beachAdvisory}</div>
          </div>
        ))}
      </main>
    </div>
  );
}