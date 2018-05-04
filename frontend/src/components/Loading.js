import React from 'react';
import { ClipLoader } from 'react-spinners';
import './Loading.css';

const Loading = ({ loading }) => (
  <main className="loading">
    <ClipLoader color={'#7a2a9c'} loading={loading} />
  </main>
);

export default Loading;
