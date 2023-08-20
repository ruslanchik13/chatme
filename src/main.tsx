import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import {GlobalStyle} from './styles/reset.ts';
import {BrowserRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <GlobalStyle/>
        <App/>
    </BrowserRouter>
);
