import { Grid, Container, Paper,Typography } from '@material-ui/core';
import FeatureCard from 'components/FeatureCard'

import GoogleMaps from 'assets/features/gmaps.gif';
import Friends from 'assets/features/friends.gif';
import Sloth from 'assets/features/sloth.gif';
import Track from 'assets/features/tracking.gif';
import Update from 'assets/features/updated.gif';
import Confused from 'assets/features/confused.gif';

const bgimg = `url(https://image.freepik.com/free-vector/winter-background-with-pastel-color-brushes-leaves_220290-42.jpg)`;

var cardText = {
    titleGoogle: 'Google Maps Integration',
    textGoogle: 'We\'ve developed tools using the Google Maps API to determine walk time between classes and to help optimize that in schedule creation.',
    titleFriends: "Schedule Sharing",
    textFriends: "We've made it easy to share your schedule with friends and compare to help and craft the perfect schedule.",
    titleSloth: "Multiple Schedule Options",
    textSloth: "We've made it so that you have multiple options when it comes to your schedule given classes, and can customize on the go.",
    
    titleTrack: "Course Tracking",
    textTrack: "We keep track of all your previous courses you've taken as well as the ones you need to take, and make suggestions based of that.",
    titleUpdate: "Up-To-Date Information",
    textUpdate: "We get all the current course information and major requirements to make the registration process as straightforward as possible.",
    titleConfused: "User Accounts",
    textConfused: "We've allowed users to create accounts so they never forget their freshman spring schedule again! And can come back and save their schedules!"
}

const styles = {
    paperContainer: {
        backgroundImage: bgimg,
        height: '300px',
        marginBottom: '1em',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    paperText: {
        display: 'flex', 
        justifyContent: 'center',
        alignItems:'center', 
        height: '100%',
    }
};

export default function AboutPage() {
    return (
        <Container> 
            <Paper style={styles.paperContainer}>
            <Typography gutterBottom variant="h1" component="div" style={styles.paperText}>
            Features
          </Typography>
            </Paper>
            <Grid
                container
                direction="row"
                justifyContent="space-evenly"
                alignItems="stretch"
            >
                <FeatureCard img={GoogleMaps} title={cardText.titleGoogle} text={cardText.textGoogle}/>
                <FeatureCard img={Friends} title={cardText.titleFriends} text={cardText.textFriends}/>
                <FeatureCard img={Sloth} title={cardText.titleSloth} text={cardText.textSloth}/>
                <FeatureCard img={Track} title={cardText.titleTrack} text={cardText.textTrack}/>
                <FeatureCard img={Update} title={cardText.titleUpdate} text={cardText.textUpdate}/>
                <FeatureCard img={Confused} title={cardText.titleConfused} text={cardText.textConfused}/>
            </Grid>
        </Container>
        
    )
}