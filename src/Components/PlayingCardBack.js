import React from "react";
import { observer } from "mobx-react";
import { cardBack } from "../PlayingCards/importedCards";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardMedia } from "@material-ui/core";
import "../App.css";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 200,
    height: 270,
  },
  media: {
    height: 0,
    paddingTop: "140%",
    marginRight: "0%",
    marginLeft: "0%",
  },
}));

export const PlayingCardBack = observer(() => {
  const classes = useStyles();
  const cardClasses = `playingCard ${classes.root}`;
  return (
    <div>
      <Card className={cardClasses}>
        <CardMedia className={classes.media} image={cardBack.image} />
      </Card>
    </div>
  );
});
