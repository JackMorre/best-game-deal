import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

export const SelectedGameReview = (props) => {
    return (
            <Card sx={{ maxWidth: 345, marginBottom: 1}}>
                <CardHeader  sx={{ paddingY: 0.5 }}
                    avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    </Avatar>
                    }
                    title={props.title}
                    subheader={props.date}
                />
                <CardContent sx={{ paddingY: 0 }}>
                    <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.
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