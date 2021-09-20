import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, makeStyles, Typography } from "@material-ui/core"

const useStyle = makeStyles((theme)=>({
    card:{
        marginBottom: theme.spacing(5),
    },
    media:{
        height: 250,
        [theme.breakpoints.down('sm')]:{
            height: 150,
        }
    }
}));

const Post = ({title, img}) => {
    const classes = useStyle();
    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia 
                    image={img}
                    className={classes.media}
                    title='My Post'
                />
                <CardContent>
                    <Typography variant='h5' gutterBottom>{title}</Typography>
                    <Typography variant='body2'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
                        consectetur earum est. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
                        consectetur earum est.
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size='small' color='primary'>Share</Button>
                <Button size='small' color='primary'>Learn More</Button>
            </CardActions>
        </Card>
    )
}

export default Post;
