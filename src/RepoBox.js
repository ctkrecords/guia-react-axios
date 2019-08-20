import React from 'react';
import {Content} from 'react-bulma-components/full';

const RepoBox = (props) => {
    if (props.repos === []){
        return(
            <p>Loading...</p>
        );
    }

    return ( 
        <Content>
            <strong>Lista de repositorios: </strong>
            <p>
                <ul>
                    {
                    props.repos.map(repos => 
                    <p><li>
                        <a href={repos.html_url}> {repos.name} </a> 
                        <p>Descripción: {repos.description}</p>
                        </li></p>)
                    }
                </ul>
            </p>
        </Content>
    );
}

export default RepoBox; 