import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import {BrowerRouter} from 'react-router-dom'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <BrowerRouter> */}
    <App />
    {/* </BrowerRouter> */}
    
  </StrictMode>
)
