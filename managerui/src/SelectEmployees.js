import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
import Avatar from '@material-ui/core/Avatar';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import SearchIcon from '@material-ui/icons/Search';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


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
  },
  root: {
    flexGrow: 1,
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
}));

//https://material-ui.com/components/lists/
export default function EmployeeSelection() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([1]);

  const handleToggle = value => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };


  return (
    <div className = "EmployeeSelection">
    <AppBar position="static">
       <Toolbar className={classes.toolbar}>
         <IconButton
           edge="start"
           className={classes.menuButton}
           color="inherit"
           aria-label="open drawer"
         >
           <MenuIcon />
         </IconButton>
         <Typography className={classes.title} variant="h5" noWrap>
           Chats
         </Typography>
         <IconButton edge="end" color="inherit">
           <ExitToAppIcon />
         </IconButton>
       </Toolbar>
     </AppBar>
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
            <Fab color="secondary" aria-label="add" className={classes.fabButton}>
              <AddIcon />
            </Fab>
            <div className={classes.grow} />
            <ListItemText> .</ListItemText>
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
