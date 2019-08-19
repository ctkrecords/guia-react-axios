import React from 'react';
import { Content, Box, Media, Image } from 'react-bulma-components/full';

const UserBox = (props) => {
    if (props.user === []){
        return(
            <p>Loading...</p>
        );
    }
    return(
        <Box>
            <Media>
                <Media.Item renderAs="figure" position="left">
                    <Image size={64} alt="64x64" src={props.user.avatar_url}/>
                </Media.Item>
                <Media.Item>
                    <Content>
                        <p>
                            <a href={props.user.html_url} target="_blank">
                                <strong>{props.user.name}</strong><small>@{props.user.login}</small>
                            </a>
                            <br/>
                            {props.user.bio}
                            <br/>
                            <small>{props.user.public_repos} Public Repos</small>
                        </p>
                    </Content>
                </Media.Item>
            </Media>
        </Box>
    );
}

export default UserBox; 