import { useAuth0 } from '@auth0/auth0-react';
import Grid from '@material-ui/core/Grid';
import AboutCard from 'components/AboutCard'
import StudyingFail from '../assets/studyingFail.gif'
import Studying from '../assets/studying.gif'
import Calendar from '../assets/calendar.gif'

var stylingObject = {
    div: {
      color: "red",
      border: "1px solid red"
    }, input: {
      margin: "2px",
      padding: "5px"
    },
    flexContainer: {
        display: 'flex',
        
    }
}

var cardText = {
    titleFail: "Stress-Free Registration",
    titleCalendar: "Automagic Scheduling",
    titleStudying: "More Free Time",
    textFail : "No more stressful class registrations! Let Nopus do the hard work and focus on picking between classes!",
    textCalendar : "Let Nopus take in your desired courses and automagically give you a potential schedule on demand!",
    textStudying : "Focus on the things that matter. Reclaim all the hours spent crafting the perfect schedule!"
}

export default function AboutPage() {
    const { isLoading } = useAuth0();
    if (isLoading) return <div>Loading ...</div>
    return (
        <>
            {/* <div style={stylingObject.flexContainer}>
                <AboutCard img={StudyingFail} title='a' text={cardText.textFail}/>
                <AboutCard img={Calendar} title='b' text={cardText.textCalendar}/>
                <AboutCard img={Studying2} title='c' text={cardText.textStudying}/>
            </div> */}
            <Grid
                container
                direction="row"
                justifyContent="space-evenly"
                alignItems="stretch"
            >
                <AboutCard img={StudyingFail} title={cardText.titleFail} text={cardText.textFail}/>
                <AboutCard img={Calendar} title={cardText.titleCalendar} text={cardText.textCalendar}/>
                <AboutCard img={Studying} title={cardText.titleStudying} text={cardText.textStudying}/>
            </Grid>
            
        </>
    )
}