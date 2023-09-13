import {
    Box,
    Typography,
    Container,
    Grid
} from "@mui/material";
import style from "@/app/_style/home.module.scss";
import Link from "next/link";

type serviceItem = { 
    image:string,
    title:string,
    body: string
}

const Service = () => {
    const serviceItem:serviceItem[] = [
        {
            image: "images/service_01.jpg",
            title: "Mechanical Engineering",
            body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum has been."
        },
        {
            image: "images/service_02.jpg",
            title: "Agricultural Processing",
            body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum has been."
        },
        {
            image: "images/service_03.jpg",
            title: "Oils And Lubricants",
            body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum has been."
        },
        {
            image: "images/service_04.jpg",
            title: "Power And Energy",
            body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum has been."
        },
        {
            image: "images/service_05.jpg",
            title: "Chemical Research",
            body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum has been."
        },
        {
            image: "images/service_06.jpg",
            title: "Material Engineering",
            body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum has been."
        },
    ]

    return ( 
        <Box className={style.home__service}>
            <Container maxWidth="lg">
                <Typography variant="h4" className={style.home__service__heading}>SERVICE</Typography>
                <Typography variant="body1" className={style.home__service__subHeading}>We provide high standard clean service for your business solutions</Typography>
                <Grid container className={style.home__service__list} spacing={5}>
                    { serviceItem.map((item:serviceItem, index:number) => (
                        <Grid item key={`home-service-item-${index}`} md={4} sm={6} xs={12} className={style.home__service__item}>
                            <Box className={style.home__service__item__mediaBox}>
                                <img src={item.image}/>
                            </Box>
                            <Box className={style.home__service__item__infoBox}>
                                <Typography variant="h5" className={style.home__service__item__infoBox__title}>{item.title}</Typography>
                                <Typography variant="body1" className={style.home__service__item__infoBox__body}>{item.body}</Typography>
                                <Link href="#" className={style.home__service__item__infoBox__link}>
                                    <Typography variant="body1">Get Details</Typography>
                                </Link>
                            </Box>
                        </Grid>
                    )) }
                </Grid>
            </Container>
        </Box>
    );
}
 
export default Service;