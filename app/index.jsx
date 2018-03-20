import React from 'react'
import {render} from 'react-dom'
import { Provider, connect } from 'react-redux'
import { createStore } from 'redux'

import rdcs from './redux/reducers.js'
import Routing from './common/main_page/Routing.jsx'

import { Container } from 'semantic-ui-react'

import './styles/notification_styles.css';

var mainStore = createStore(rdcs);

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <Container>
                <Provider store={mainStore}>
                    <Routing />
                </Provider>
            </Container>
        );
    }
}

render(<App/>, document.getElementById('app'));

