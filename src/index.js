import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';


const tableData = [
    {
        a: 'Я',
        b: '—',
        c: 'маленькая',
        d: 'лошадка',
    },
    {
        a: 'И',
        b: 'мне',
        c: 'живется',
        d: 'несладко',
    },
    {
        a: 'Я',
        b: '—',
        c: 'маленькая',
        d: 'лошадка',
    },
    {
        a: 'Но',
        b: 'мне',
        c: 'нельзя',
        d: 'отвлекаться',
    },
];

ReactDOM.render(<App data={tableData}/>, document.getElementById('root'));
registerServiceWorker();
