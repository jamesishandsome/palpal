import './App.css';
import { Home } from './pages/home';
import { Analytics } from '@vercel/analytics/react';
function App() {
    return (
        <>
            <div className={'flex justify-center items-center w-full h-full'}>
                <Home></Home>
            </div>
            <Analytics />
        </>
    );
}

export default App;
