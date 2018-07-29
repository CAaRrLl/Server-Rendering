import React, { Component } from 'react';
import routes from './routes';
import { Switch, Route } from 'react-router-dom';
import NoMatch from './NoMatch';
import Navbar from './Navbar';

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Navbar/>
                <Switch>
                    {routes.map(({ path, exact, component:C, ...rest}) => (
                        <Route 
                            key={path}
                            path={path}
                            exact={exact}
                            render={(props) => <C {...rest} {...props} />}
                        />
                    ))}
                    <Route render={(props) => <NoMatch {...rest} />}/>
                </Switch>
            </div>
        );
    }
}