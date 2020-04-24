import React from "react";
import Container from "@material-ui/core/Container";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {Link} from "react-router-dom";


const PostList = (props) => {

        return(<div>
            {props.posts && Object.keys(props.posts).map(key => (
            <Container maxWidth="sm">

                <Card >
                    <CardHeader
                        avatar={
                            <Avatar aria-label="recipe" >

                            </Avatar>

                        }

                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                        }

                        subheader={props.posts[key].userId}


                    />
                    <CardMedia
                        //className={classes.media}
                        image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <p>{props.posts[key].content}</p>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon /> {props.posts[key].likes}
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                        <IconButton
                            aria-label="show more"
                            //onClick={handleExpandClick}
                        >

                            <button /*if comments == null disabled*/><Link to={'/post/'+props.posts[key].id+'/comments'} username={props.username}>Comments</Link></button>
                        </IconButton>
                    </CardActions>
                    <Container>


                    </Container>
                </Card>


            </Container>
            ))}
            </div>
        )
}

export default PostList;