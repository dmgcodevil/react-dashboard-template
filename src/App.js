import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Overview from './pages/Overview'
import KafkaMetricsPage from './pages/KafkaMetricsPage'
import SideMenu from './SideMenu'
import { Container } from "semantic-ui-react";

class App extends React.Component {
    render() {
        return (
            <div>
                <Router>
                    <SideMenu />
                    <Container>
                        <Switch>
                            <Route path="/" exact component={Overview} />
                            <Route path="/metrics-kafka" component={KafkaMetricsPage} />
                        </Switch>
                    </Container>
                </Router>
            </div>
        );
    }
}

export default App;