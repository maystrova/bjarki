import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BjarkiProvider } from './context/storeContext'

ReactDOM.render(
    <React.StrictMode>
        <BjarkiProvider>
            <App />
        </BjarkiProvider>
    </React.StrictMode>,
    document.getElementById('root'),
)
