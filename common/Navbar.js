import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
 
export default class Navbar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const languages = [{
            name: 'All',
            param: 'all'
          }, {
            name: 'JavaScript',
            param: 'javascript',
          }, {
            name: 'Ruby',
            param: 'ruby',
          }, {
            name: 'Python',
            param: 'python',
          }, {
            name: 'Java',
            param: 'java',
        }];
        
        return (
           <ul>
               {languages.map(({ name, param }) => (
                    <li key={param}>
                        <NavLink activeStyle={{fontWeight: 'bold'}} to={`/popular/${param}`}>
                            {name}
                        </NavLink>
                    </li>
                ))}
           </ul>
        )
    }
}