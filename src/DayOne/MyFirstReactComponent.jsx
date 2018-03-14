//Single line comment in javascript
/*
Multi Line Comment in javascript
*/
// import: imports a library/file from a source
// React: name we give the import, it can be named anything
// from: describs where the import is coming from
// 'react': ../node_modules/react/index.js
import React from 'react';

class MyFirstReactComponent extends React.Component {
    // render function is used to show what should be displayed
    render () {
        return (<div>Hello World</div>);
    }
}

// exports the class to be used
export default MyFirstReactComponent;