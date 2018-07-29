import React, { Component } from 'react';
 
export default class List extends Component {
    constructor(props) {
        super(props);

        let repos;
        if(__isBrowser__) {
            repos =  window.__INITDATA__;
            delete window.__INITDATA__;
        } else {
            repos = props.staticContext.data;
        }

        this.state = {
            repos,
            loading: repos? false: true
        }

    }

    componentDidMount() {
        if(!this.state.repos) {
            this.getRepos(this.props.match.params.id);
        }
    }

    componentWillReceiveProps(nextProps) {
        this.getRepos(nextProps.location.pathname);
    }

    getRepos(lang) {
        this.setState({loading: true});

        this.props.initData(lang).then(repos => {
            this.setState({repos, loading: false});
        })
    }

    render() {
        const { repos, loading } = this.state;

        if(loading) {
            return (
                <div>LOADING</div>
            )
        }

        return (
             <ul style={{display: 'flex', flexWrap: 'wrap'}}>
                {repos.map(({ name, owner, stargazers_count, html_url }) => (
                <li key={name} style={{margin: 30}}>
                    <ul>
                    <li><a href={html_url}>{name}</a></li>
                    <li>@{owner.login}</li>
                    <li>{stargazers_count} stars</li>
                    </ul>
                </li>
                ))}
            </ul>
        )
    }
}