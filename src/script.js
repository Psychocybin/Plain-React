let rootElement = document.getElementById('root');

// let reactElement = React.createElement(
//     'header',
//     { className: 'site-header'},
//     React.createElement('h1', { id: 'main-heading'}, 'Hello React'),
//     React.createElement('h2', {}, 'The best framework in the world')
// );

let reactElement = (
    <div>
        <header>
            <h1>Hello JSX</h1>
            <h2>The best framework in the world</h2>

            <p>lorem20</p>

        </header>

        <footer>All rights reserved &copy; </footer>
    </div>
);

ReactDOM.render(reactElement, rootElement);