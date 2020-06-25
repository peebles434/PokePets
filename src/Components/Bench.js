import React from "react";
import { observer } from "mobx-react";
import { PlayingCard } from "./PlayingCard";
import { PlayingCardBack } from "./PlayingCardBack";
import { importedCards } from "../PlayingCards/importedCards";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: 1100,
      height: 290,
    },
  },
}));

export const Bench = observer(({ opponentBench }) => {
  const classes = useStyles();
  const classNames = `${opponentBench ? "awayBench" : "homeBench"}`;
  return (
    <div className={classes.root}>
      <Paper elevation={10} className={classNames}>
        <div className="bench">
          {opponentBench === true ? (
            <PlayingCardBack />
          ) : (
            <PlayingCard card={importedCards[0]} />
          )}
          {opponentBench === true ? (
            <PlayingCardBack />
          ) : (
            <PlayingCard card={importedCards[1]} />
          )}
          {opponentBench === true ? (
            <PlayingCardBack />
          ) : (
            <PlayingCard card={importedCards[2]} />
          )}
          {opponentBench === true ? (
            <PlayingCardBack />
          ) : (
            <PlayingCard card={importedCards[3]} />
          )}
          {opponentBench === true ? (
            <PlayingCardBack />
          ) : (
            <PlayingCard card={importedCards[4]} />
          )}
        </div>
      </Paper>
    </div>
  );
});
