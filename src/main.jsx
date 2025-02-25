
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import '/node_modules/bootstrap/dist/css/bootstrap.css'
// import { BrowserRouter } from 'react-router-dom'
import { HashRouter } from 'react-router-dom'
createRoot(document.getElementById('root')).render(
    <HashRouter>
       <App />
     </HashRouter>
    //    https://Yogieshwar.github.io/Recipe-App
  
    
  
)
