import {
    Link,
} from "react-router-dom";
import styled from 'styled-components'; // https://styled-components.com/
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import EventIcon from '@mui/icons-material/Event';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ListItemIcon from '@mui/material/ListItemIcon';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';

export default function InternalNav() {
  const drawerWidth = 600;
  return <Drawer
      sx={{
        width: drawerWidth,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      variant="permanent"
      anchor="left"
    >
    <NavLinkImage to="/">
        <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="logo" width="51px" height="40px"/>
    </NavLinkImage>
    <Nav>
      <MenuList>
      <NavButton component={Link} to="/user/schedule">
        <ListItemIcon>
          <EventIcon />
        </ListItemIcon>
        <ListItemText primary="Schedule" />
      </NavButton>
      <NavButton component={Link} to="/user/profile">
        <ListItemIcon>
          <PersonOutlineIcon />
        </ListItemIcon>
        <ListItemText primary="Profile" />
      </NavButton>
      </MenuList>
    </Nav>
    <ListItemButton sx={{margin: 1}}>
      <ListItemText primary="Sign Out" />
    </ListItemButton>
  </Drawer>
}

const NavButton = styled(MenuItem)`
  margin-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  align-items: left;
  justify-content: left;
`

const Nav = styled.nav`
    height: 100%;
    width: 100%;
    padding-top: 75px;
    padding-left: 20px;
    padding-right: 20px;
`
const NavLink = styled(Link)`
    width: 100%;
    padding: 5px 5px;
    text-decoration: none;
    color: inherit;
    font-weight: bold;
`

const NavLinkImage = styled(NavLink)`
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    padding-left: 60px;
`
