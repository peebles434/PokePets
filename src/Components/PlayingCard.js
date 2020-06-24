import React from "react";
import { observer } from "mobx-react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardMedia } from "@material-ui/core";
import "../App.css";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 175,
    height: 275,
  },
  media: {
    height: 0,
    paddingTop: "70%",
    marginRight: "10%",
    marginLeft: "10%",
  },
}));

export const PlayingCard = observer(({ card }) => {
  console.log(card);
  const classes = useStyles();
  const cardClasses = `playingCard ${classes.root}`;
  return (
    <Card className={cardClasses}>
      <div className="cardHeader">
        <h4 className="cardName">{card.name}</h4>
        <h4 className="cardHP">{card.hp} HP</h4>
      </div>
      <CardMedia className={classes.media} image={card.image} />
      <hr className="cardDivider" />
      <div className="attack1">
        <h4 className="attackName">{card.attack1.name}</h4>
        <h4 className="attackDmg">{card.attack1.dmg}</h4>
      </div>
      <hr className="cardDivider" />
      <div className="attack2">
        <h4 className="attackName">{card.attack2.name}</h4>
        <h4 className="attackDmg">{card.attack2.dmg}</h4>
      </div>
      <p className="attackDetails">{card.attack2.details}</p>
    </Card>
  );
});
