import { Box, Button, Grid, Typography } from "@mui/material";
import style from "@/app/_style/home.module.scss";

import SendIcon from '@mui/icons-material/Send';

const About = () => {
    return ( 
        <Box className={style.home__about}>
            <Grid container alignItems="center">
                <Grid item sm={6} md={4} xs={12} className={style.home__about__left}>
                    <img className={style.home__about__image} src="/images/businessman.png" alt="businessman" />
                </Grid>
                <Grid item sm={6} md={8} xs={12} className={style.home__about__right}>
                    <Typography variant="h3" className={style.home__about__right__title}>Reliable Engineering Takes Many Forms</Typography>
                    <Typography variant="h5" className={style.home__about__right__subTitle}>Our Combined Experience</Typography>
                    <Typography variant="body1" className={style.home__about__right__body}>Teritatis et quasi architecto. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore mque laudantium, totam rem aperiam eaque ipsa quae ab illo invent. Sed ut perspiciatis unde omnis.</Typography>
                    <Typography variant="body1" className={style.home__about__right__body}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</Typography>
                    <Button endIcon={<SendIcon/>} className={style.home__about__right__btn}>Get a Quote</Button>
                </Grid>
            </Grid>
        </Box>
    );
}
 
export default About;