import React from 'react';
import ReactDOM from 'react-dom';
import Helmet from 'react-helmet';
import App from './app/App';

ReactDOM.render(
  <React.StrictMode>
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
