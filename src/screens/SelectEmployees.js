import React from 'react';
import { makeStyles, useTheme  } from '@material-ui/core/styles';
import Logo from './whiteLogo.png'
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

//Code created with the help of material-ui weebsite and doc https://material-ui.com (MIT Licensed)

const drawerWidth = 240;

//Hardcoded employees avil to chat to with id, name, the last message sent, and the icon for them
// Before this is deployed this should be replaced with a query to the database to get accurate information
const messages = [
  {
    id: 1,
    primary: 'Employee One',
    secondary: 'Could I come in a half hour later?',
    person: ProPic,
  },
  {
    id: 2,
    primary: 'Employee Two',
    secondary: 'Yeah sure I can take that shift!',
    person: ProPic,
  },
  {
    id: 3,
    primary: 'Employee Three',
    secondary: "Start a conversation",
    person: ProPic,
  },
  {
    id: 4,
    primary: 'Employee Four',
    secondary: "Start a conversation",
    person: ProPic,
  },
  {
    id: 5,
    primary: 'Employee Five',
    secondary: "Start a conversation",
    person: ProPic,
  },
  {
    id: 6,
    primary: 'Employee Six',
    secondary: "Start a conversation",
    person: ProPic,
  },
  {
    id: 7,
    primary: 'Employee Seven',
    secondary: "Start a conversation",
    person: ProPic,
  },
];

// Icons that are used for the side bar with links to the proper pages/ external web links - links are made in index.js
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
    link: '/chat'
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

// Define the styles of the page including the app bar, the side bar and its shifting, layout, etc
const useStyles = makeStyles(theme => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    minHeight: 128,
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

//https://material-ui.com/components/lists/
// Where the page is put together and rendered
export default function EmployeeSelection() {
  // Use the styles defined above and material UI theme
  const classes = useStyles();
  const theme = useTheme();
  // States of wheter or not the checkboxes are selected and if the side bar is opened
  const [checked, setChecked] = React.useState([1]);
  const [open, setOpen] = React.useState(false);

  // To allow for teh checkboxes to be selected and unselected
  const handleToggle = value => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    }
    else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  // Handles opening the side bar - changes state
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  // Handles closing the side bar - changes state
  const handleDrawerClose = () => {
    setOpen(false);
  };


  // Actually renders the page
  // The app bar is the blue bar at the top with the sidebar and log out button
  // The drawer is the side bar component when the icon in the app bar is clicked it opens it
  // The icons/links are mapped onto the drawer (sidebar) and all have a link component that the router in index.js uses
  // to link to either internal or external webpages
  // The employees names, pics, sample messages, etc are mapped into a list that displays as the main part of the page
  // Currently they are hardcoded to either go into either active or not started conversations - before deployment we suggest adding
  // a boolen for wheter or not a conversation has been started with this employee and use that to determine which category the employee
  // should be mapped to but since we could not connect to their database we have not implemented this aspect here
  // Each employee has a checkbox that can be selected/unselected and thats handled in the checkbox object
  // The app bar at the bottom of the html is the aspect of the page with the fab button which links to our chat page
  // once its clicked - before deployment it should allow for messages to be sent to multiple employees but we could not implement this since we
  // didnt have real users/multiple users and only had one chat page to link to
  return (
    <div className = "EmployeeSelection">
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
           Chats
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
      <Paper square className={classes.paper}>
        <List className={classes.list}>
          {messages.map(({ id, primary, secondary, person, value }) => (
            <React.Fragment key={id}>
              {id === 1 && <ListSubheader className={classes.subheader}>Active Conversations</ListSubheader>}
              {id === 3 && <ListSubheader className={classes.subheader}>Start a Conversation</ListSubheader>}
              <ListItem button>
                <ListItemAvatar>
                  <Avatar alt="Profile Picture" src={person} />
                </ListItemAvatar>
                <ListItemText primary={primary} secondary={secondary} />
                <ListItemSecondaryAction>
                  <Checkbox
                    edge="end"
                    onChange={handleToggle(id)}
                    checked={checked.indexOf(id) !== -1}
                  />
              </ListItemSecondaryAction>
              </ListItem>
            </React.Fragment>
          ))}
        </List>
      </Paper>
      <React.Fragment>
        <CssBaseline />
        //https://material-ui.com/components/paper/#paper
        <AppBar color="primary" className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="open drawer">
              <SearchIcon />
            </IconButton>
            <Fab
            component = {Link}
            to = "/chat/"
            color="secondary" aria-label="add" className={classes.fabButton}>
              <AddIcon />
            </Fab>
            <div className={classes.grow} />
            <ListItemText>  </ListItemText>
            <IconButton color="inherit">
              <AddIcon />
            </IconButton>
            <IconButton edge="end" color="inherit">
              <DeleteIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        </React.Fragment>
      </div>
    );
}
