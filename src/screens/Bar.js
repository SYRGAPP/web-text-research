import React from 'react';
import logo from './syrglogo.png';
import { makeStyles, useTheme  } from '@material-ui/core/styles';
import ProPic from './propic.jpg'
import { Button } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import Checkbox from '@material-ui/core/Checkbox'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Avatar from '@material-ui/core/Avatar';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import SearchIcon from '@material-ui/icons/Search';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ChatIcon from '@material-ui/icons/Chat';
import HomeIcon from '@material-ui/icons/Home';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import SettingsIcon from '@material-ui/icons/Settings';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Drawer from '@material-ui/core/Drawer';
import clsx from 'clsx';
import { Link } from 'react-router-dom'

const drawerWidth = 240;

const icons = [
  {
    id:1,
    primary: 'Home',
    person: <HomeIcon />,
    link : '/home'
  },
  {
    id:2,
    primary: 'Chats',
    person: <ChatIcon />,
    link: '/users'
  },
  {
    id:3,
    primary: 'Contact Support',
    person: <ContactSupportIcon />,
    link: '/support'
  },
  {
    id:4,
    primary: 'Settings',
    person: <SettingsIcon />,
    link: '/settings'
  },

];

const useStyles = makeStyles(theme => ({
    text: {
      padding: theme.spacing(2, 2, 0),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    toolbar: {
      alignItems: 'flex-start',
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(2),
    },
    paper: {
      paddingBottom: 50,
    },
    list: {
      marginBottom: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      alignSelf: 'flex-end',
    },
    subheader: {
      //theme.palette.background.paper
      backgroundColor: theme.palette.background.paper,
    },
    appBar: {
      top: 'auto',
      bottom: 0,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    root: {
      flexGrow: 1,
      display: 'flex',
    },
    //The + sign
    fabButton: {
      position: 'absolute',
      zIndex: 1,
      top: -30,
      left: 0,
      right: 0,
      margin: '0 auto',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
  }));


  export default function Bar() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
      setOpen(true);
    };

    const handleDrawerClose = () => {
      setOpen(false);
    };
        return (
          <div className = "side-bar">
            <AppBar position="static" className={clsx(classes.appBar, {[classes.appBarShift]: open,})}>
               <Toolbar className={classes.toolbar}>
                 <IconButton
                   edge="start"
                   className={clsx(classes.menuButton, open && classes.hide)}
                   color="inherit"
                   aria-label="open drawer"
                   onClick={handleDrawerOpen}
                 >
                   <MenuIcon />
                 </IconButton>
                 <Typography className={classes.title} variant="h5" noWrap>
                 </Typography>
                 <IconButton edge="end" color="inherit" component = {Link}
                 to = "/">
                   <ExitToAppIcon
                   />
                 </IconButton>
               </Toolbar>
             </AppBar>
             <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                  paper: classes.drawerPaper,
                }}
              >
                <div className={classes.drawerHeader}>
                  <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                  </IconButton>
                </div>
                <Divider />
                <List>
                {icons.map(({ id, primary, person, link}) => (
                  <React.Fragment key={id}>
                    <ListItem button
                    component = {Link}
                    to = {link}>
                      <ListItemIcon>
                        {person}
                      </ListItemIcon>
                      <ListItemText primary={primary} />
                    </ListItem>
                  </React.Fragment>
                ))}
                </List>
                <Divider />
              </Drawer>
                <div className="employee-name-container">
                    <div className="employee-name">
                        Sarah Jones
                    </div>
                </div>
            </div>
        );
    }
