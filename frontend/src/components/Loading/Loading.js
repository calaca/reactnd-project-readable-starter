import React from 'react';
import PropTypes from 'prop-types';
import { ClipLoader } from 'react-spinners';
import './Loading.css';

const Loading = ({ loading }) => (
  <main className="loading">
    <ClipLoader color={'#7a2a9c'} loading={loading} />
  </main>
);

Loading.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Loading;
