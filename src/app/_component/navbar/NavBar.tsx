'use client'
import { 
    AppBar, 
    IconButton, 
    Typography,
    Box,
    useScrollTrigger,
    Fade,
    Fab,
    Stack,
    useMediaQuery,
} from "@mui/material";


import MenuIcon from '@mui/icons-material/Menu';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import Link from "next/link";
import { useState, cloneElement, ReactElement } from "react";
import DrawerNav from "./Drawer";

import style from "@/app/_style/navbar.module.scss"
import theme from "@/mui_theme/theme";

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
    children?: React.ReactElement;
}

function ScrollNavbarHandle(props: Props) {
    const matches = useMediaQuery(theme.breakpoints.up('lg'));
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 400,
      target: window ? window() : undefined,
    });

    return cloneElement(children as ReactElement, {
        elevation: trigger ? 10 : 0,
        style: {
            position: trigger ? "fixed": "absolute",
            animation: trigger ? `${matches ? style.slideFromTopLg : style.slideFromTop} 200ms 1 forwards` : "",
        }
    });
}

function ScrollToTopHandle(props: Props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
      disableHysteresis: true,
      threshold: 100,
    });
  
    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
      const anchor = (
        (event.target as HTMLDivElement).ownerDocument || document
      ).querySelector('#back-to-top-anchor');
  
      if (anchor) {
        anchor.scrollIntoView({
          block: 'center',
          behavior: 'smooth'
        });
      }
    };
  
    return (
        <Fade in={trigger}>
            <Box onClick={handleClick} role="presentation" className={style.scrollToTop}>
                {children}
            </Box>
        </Fade>
    );
}

const NavBar = (props: Props) => {
    const navLink = ["home", "about us", "services", "faq", "projects", "news", "contact"];
    const socialIcon = [ <FacebookIcon className={ style.navbar__icon }/>, <TwitterIcon className={ style.navbar__icon }/>, <InstagramIcon className={ style.navbar__icon }/>, <PinterestIcon className={ style.navbar__icon }/>]
    const [openDrawer, setOpenDrawer] = useState(false);

    return (
        <Box>
            <Box id="back-to-top-anchor" />
            <DrawerNav navLink={navLink} drawerOpen={openDrawer} setOpenDrawer={setOpenDrawer}/>
            <ScrollNavbarHandle {...props}>
                <AppBar className={style.navbar}>
                    <Box className={style.navbar__1}>
                        <Typography className={style.navbar__info}>Number 1 in Industrial services</Typography>
                        <Stack direction="row">
                            {socialIcon.map((icon:React.ReactNode, index:number) => (
                                <IconButton key={`social-btn-${index}`} className={style.navbar__socialBtn}>
                                    {icon}
                                </IconButton>
                            ))}
                        </Stack>
                    </Box>
                    <Box className={style.navbar__2}>
                        <Link href="/" className={style.navbar__logoBrand}>
                            <img src="images/logo-brand.png" alt="Logo Brand" />
                        </Link>
                        <Box className={style.navbar__links}>
                            {navLink.map((link:string, index:number) => (
                                <Link key={`navbar-link-${index}`} href={`/${link.replace(" ", "-")}`}>
                                    <Typography className={style.navbar__link} variant="body2">{link.toUpperCase()}</Typography>
                                </Link>
                            ))}
                        </Box>
                        <IconButton onClick={() => {setOpenDrawer(!openDrawer)}} className={style.navbar__menuBtn}>
                            <MenuIcon/>
                        </IconButton>
                    </Box>
                </AppBar>
            </ScrollNavbarHandle>
            <ScrollToTopHandle {...props}>
                <Fab size="large" aria-label="scroll back to top" className="">
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollToTopHandle>
        </Box>
    );
}

export default NavBar;