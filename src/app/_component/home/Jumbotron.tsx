import {
    Box,
    Button,
    Stack,
    Typography
} from "@mui/material";

import style from "@/app/_style/home.module.scss";

const Jumbotron = () => {
    return ( 
        <Box className={style.home__jumbotron}>
            <Box>
                <Typography variant="h3" className={style.home__jumbotron__title}>INDUSE Industrial</Typography>
                <Typography variant="body1" className={style.home__jumbotron__body}>Our professional team works to increase productivity and cost effectiveness on the market</Typography>
                <Stack direction="row" gap={2} alignItems="center" justifyContent="center" flexWrap="wrap">
                    <Button className={style.home__jumbotron__btn1}>Get Started</Button>
                    <Button className={style.home__jumbotron__btn2}>Learn More</Button>
                </Stack>
            </Box>
        </Box>
    );
}
 
export default Jumbotron;