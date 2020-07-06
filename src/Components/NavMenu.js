import React from "react";
import { useHistory } from "react-router-dom";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import {
  Drawer,
  IconButton,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import MailIcon from "@material-ui/icons/Mail";
import HomeIcon from "@material-ui/icons/Home";
import ColorizeIcon from "@material-ui/icons/Colorize";
import StoreIcon from "@material-ui/icons/Store";
import PersonIcon from "@material-ui/icons/Person";
import ViewCarouselIcon from "@material-ui/icons/ViewCarousel";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export const NavMenu = () => {
  const classes = useStyles();
  const history = useHistory();
  const [state, setState] = React.useState({
    left: false,
  });

  const homeClickHandler = () => {
    history.push("/");
  };

  const collectionClickHandler = () => {
    history.push("/collection");
  };

  const battleClickHandler = () => {
    history.push("/battle");
  };

  const shopClickHandler = () => {
    history.push("/shop");
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button key="Home" onClick={homeClickHandler}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button key="CardCollection" onClick={collectionClickHandler}>
          <ListItemIcon>
            <ViewCarouselIcon />
          </ListItemIcon>
          <ListItemText primary="Card Collection" />
        </ListItem>
        <ListItem button key="Battle" onClick={battleClickHandler}>
          <ListItemIcon>
            <ColorizeIcon />
          </ListItemIcon>
          <ListItemText primary="Battle" />
        </ListItem>
        <ListItem button key="Shop" onClick={shopClickHandler}>
          <ListItemIcon>
            <StoreIcon />
          </ListItemIcon>
          <ListItemText primary="Shop" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button key="Messenger">
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary="Messenger" />
        </ListItem>
        <ListItem button key="Account">
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="Account" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      <React.Fragment key="left">
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer("left", true)}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          anchor="left"
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
        >
          {list("left")}
        </Drawer>
      </React.Fragment>
    </div>
  );
};
