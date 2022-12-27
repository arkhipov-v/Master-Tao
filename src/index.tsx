import React from 'react';
import ReactDOM from 'react-dom/client';

import '../src/sass/style.scss';
import App from '../src/App';

import "swiper/css";
import "swiper/css/navigation";

import "swiper/css/bundle";

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);

