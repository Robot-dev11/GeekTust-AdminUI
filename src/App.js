import React from 'react';
import ReactDOM from 'react-dom/client';
import Adminpanel from './components/Adminpanel';


const AppLayout = () => {
    return (
        <Adminpanel />
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />)
