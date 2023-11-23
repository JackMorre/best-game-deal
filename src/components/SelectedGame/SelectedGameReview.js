import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

export const SelectedGameReview = (props) => {
    return (
            <Card sx={{ maxWidth: 345, margin: "0rem auto 1rem auto", border: 1, backgroundColor: '#3f3f3f'}}>
                <CardHeader  sx={{ paddingY: 0.5 }}
                    avatar={
                    <Avatar sx={{ bgcolor: "#a688fa" }} aria-label="recipe">
                    </Avatar>
                    }
                    title={props.title}
                    subheader={props.date}
                />
                <CardContent sx={{ paddingY: 0 }}>
                    <Typography variant="body2">
                    {props.description}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing sx={{ paddingY: 0, justifyContent: 'end' }}>
                    <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                    <ShareIcon />
                    </IconButton>
                </CardActions>
            </Card>
    );
};