import {
  Box,
  Container
} from "@mui/material";

import style from "@/app/_style/home.module.scss";
import Jumbotron from "./_component/home/Jumbotron";
import Service from "./_component/home/Service";
import About from "./_component/home/About";

export default function Home() {
  return (
    <Box className={style.home}>
      <Jumbotron/>
      <Service/>
      <About/>
    </Box>
  )
}
