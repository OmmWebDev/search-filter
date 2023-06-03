import './App.css';
import ShowData from './components/ShowData';

function App() {
    return (
        <>
            <section>
                <div className="wrapper">
                    <div className='search-box'>
                        <input type="text" placeholder='Search Names' />
                    </div>
                    <ShowData />
                </div>
            </section>
        </>
    );
}

export default App;