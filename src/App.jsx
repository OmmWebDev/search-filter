import React, { useState } from 'react';
import './App.css';
import ShowData from './components/ShowData';

function App() {

    const [search, setSerach] = useState("");
    
    return (
        <>
            <section>
                <h1>Contact List</h1>
                <div className="wrapper">
                    <div className='search-box'>
                        <input type="text" placeholder='Search Names' value={search}
                            onChange={(e) => setSerach(e.target.value)} />
                    </div>
                    <ShowData searchItem={search} />
                </div>
            </section>
        </>
    );
}

export default App;