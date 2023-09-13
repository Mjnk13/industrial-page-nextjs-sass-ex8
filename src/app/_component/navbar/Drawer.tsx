import { 
    Box,
    Divider,
    Drawer,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography
} from "@mui/material";

import style from "@/app/_style/navbar.module.scss"

import HomeIcon from '@mui/icons-material/Home';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import InfoIcon from '@mui/icons-material/Info';
import BookIcon from '@mui/icons-material/Book';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import ArticleIcon from '@mui/icons-material/Article';
import ContactsIcon from '@mui/icons-material/Contacts';
import PhoneIcon from '@mui/icons-material/Phone';
import CloseIcon from '@mui/icons-material/Close';

import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

type props = {
    navLink: string[],
    drawerOpen: boolean,
    setOpenDrawer: Dispatch<SetStateAction<boolean>>
}

const DrawerNav = (props:props) => {
    const iconItemDrawer = [
        <HomeIcon />,
        <InfoIcon />,
        <SupportAgentIcon />,
        <BookIcon />,
        <AccountTreeIcon/>,
        <ArticleIcon/>,
        <ContactsIcon />
    ]

    return ( 
        <Drawer open={props.drawerOpen} onClose={() => { props.setOpenDrawer(false); }} className={style.drawer}>
            <List>
                <Box className={style.drawer__top}>
                    <Typography variant="h3">Menu</Typography>
                    <ListItemIcon onClick={() => props.setOpenDrawer(false)}>
                        <CloseIcon className={style.drawer__closeIcon}/>
                    </ListItemIcon>
                </Box>

                <Divider className={style.drawer__divider}/>
                
                {props.navLink.map((item: string, index:number) => (
                    <ListItemButton key={`nav-link-drawer-${index}`} component={Link} href={`/${item === "Home" ? "" : item.toLowerCase()}`}>
                        <ListItemIcon>
                            {iconItemDrawer[index]}
                        </ListItemIcon>
                        <ListItemText primary={item} />
                    </ListItemButton>
                ))}
                
                <Divider className={style.drawer__divider}/>

                <ListItemButton>
                    <ListItemIcon>
                        <PhoneIcon />
                    </ListItemIcon>
                    <ListItemText primary="Call +10 (78) 783 3674"/>
                </ListItemButton>
            </List>
        </Drawer>
    );
}
 
export default DrawerNav;