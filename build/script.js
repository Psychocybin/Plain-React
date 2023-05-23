var rootElement = document.getElementById('root');

// let reactElement = React.createElement(
//     'header',
//     { className: 'site-header'},
//     React.createElement('h1', { id: 'main-heading'}, 'Hello React'),
//     React.createElement('h2', {}, 'The best framework in the world')
// );

var reactElement = React.createElement(
    'div',
    null,
    React.createElement(
        'header',
        null,
        React.createElement(
            'h1',
            null,
            'Hello JSX'
        ),
        React.createElement(
            'h2',
            null,
            'The best framework in the world'
        ),
        React.createElement(
            'p',
            null,
            'lorem20'
        )
    ),
    React.createElement(
        'footer',
        null,
        'All rights reserved \xA9 '
    )
);

ReactDOM.render(reactElement, rootElement);