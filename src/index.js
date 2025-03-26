import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
const App = () => {
    return (
        <>
            <h1>Hello World</h1>
            <p>test</p>
        </>
    );
}
root.render(<App />, document.getElementById('root'))