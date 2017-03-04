// ES6 Syntax - same as require
import React from 'react'
// Using destructuring to render - could replace with ReactDOMd
import { render } from 'react-dom'
import App from './components/App'

render(<App />, document.getElementById('app'))
