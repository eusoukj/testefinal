import React from 'react';
import {makeStyles} from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { ListSubheader } from '@material-ui/core';
import { ListItemText } from '@material-ui/core';
import { ListItem } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        
    },
    button: {
        width: '100%'
    },
}));

const tags = [
    {id: 1, name: 'Como fiz meu primeiro milhão.'},
    {id: 2, name: 'Top 10 SHITCOINS'},
    {id: 3, name: 'Como viver de Opções Binárias'},
    {id: 4, name: 'A verdade sobre a IQ Option'},
    {id: 5, name: 'Melhor Trader de 2021'},
    {id: 6, name: 'Fibonacci, Mina de Ouro'},
    {id: 7, name: 'Fibonacci, Mina de Ouro'},
    {id: 8, name: 'Fibonacci, Mina de Ouro'},
    {id: 9, name: 'Fibonacci, Mina de Ouro'},
    {id: 10, name: 'Fibonacci, Mina de Ouro'},
]

function NavBar() {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Button variant="outlined" color= "primary" className={classes.button}>Torne-se um Membro</Button>
            <ListSubheader >{'TOP 10 ASSUNTOS EM ALTA'}</ListSubheader>
            {
                tags.map((item) => (
                    <ListItem dense button key={`item-${item.id}-${item.name}`}>
                        <ListItemText primary={`- ${item.name}`} />
                    </ListItem>
                ))
            }
            <Button variant="outlined" color= "secondary" className={classes.button}>YOUTUBE</Button>
        </Paper>
    );
}

export default NavBar;