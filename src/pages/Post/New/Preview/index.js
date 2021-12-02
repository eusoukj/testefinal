import React from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import Markdown from 'react-markdown';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { usePost } from '../../../../context/PostContext';

const useStyles = makeStyles((theme) => ({
    imagePreview: {
        height: 300,
    },
    avatar: {
        marginRight: theme.spacing(1),
    },
}));

function PostPreview() {
    const ctx = usePost();
    const { image, title, tags, markdownText } = ctx;
    const classes = useStyles();
    const account = useSelector((state) => state.account);

    return (
        <>
            {image && (
                <Box mb={1}>
                <img className={classes.imagePreview} src={image} alt="background" />
                </Box>
                )}
                <Box mb={1}>
                <Typography variant="h2">{title}</Typography>
                </Box>
                <Box display="flex" alignItems="center" mb={1}>
                    <Box>
                        <Avatar className={classes.avatar} src={account.user?.avatar} />
                    </Box>
                    <Box>
                        <Typography variant="body1">{account.user?.name}</Typography>
                        <Typography variant="body2" color="textSecondary">
                            1 dia atrás
                        </Typography>
                    </Box>
                </Box>
                <Box mb={1}>
                <Typography variant="body1">
                    {tags?.map(item => item.title).join(',')}
                </Typography>
                </Box>
                <Divider />
                <Markdown>{markdownText}</Markdown>
        </>
    )
}

export default PostPreview;