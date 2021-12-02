import React from 'react';
import {makeStyles} from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import PostCard from '../../components/PostCard';
//import NavBar from './Navbar';

const useStyles = makeStyles(() => ({
    root: {

    }
}));

const posts = [
{
    id: 1,
    author: {
    name:'Sniper Buda',
    username: 'sniperbuda',
    avatar: '/images/avatars/avatar.jpg'
},
title: "Top 10 Cripto Moedas que eu recomendo para 2022.",
date: "26 de Novembro, 2021",
description: 'Fala Pessoal! Aqui estão as Cryptos que eu recomendo para 2022.',
hashtags: '#crypto, #shitcoins',
image: "/images/posts/logo.jpg"
},
{
    id: 2,
    author: {
    name:'KJ Trader',
    username: 'eusoukj',
    avatar: '/images/avatars/avatar1.jpg'
},
title: "Como viver de Opções Binárias.",
date: "26 de Novembro, 2021",
description: 'O Guia Definitivo para viver de Opções Binárias.',
hashtags: '#daytrade, #iqoption',
image: "/images/posts/logo1.png"
},

];

function Feed() {
    const classes = useStyles();


    return (
    <Container maxWidth="lg">
        <Box display="flex">
            {/* <NavBar /> */}
            <div className={classes.root}>
                {posts.map(post => (
                <PostCard key={post.id} post={post} />
            ))}
            </div>
        </Box>
    </Container>


    );
}

export default Feed;