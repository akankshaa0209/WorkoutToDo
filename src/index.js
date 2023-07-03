//connection with dom

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));  



root.render(
 <BrowserRouter>
   <App />
 </BrowserRouter>
);

//we hve to wrap our app within the browser router so we can actually use those routes
