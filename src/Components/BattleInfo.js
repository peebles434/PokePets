import React from "react";
import { observer } from "mobx-react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: 300,
      height: 150,
    },
  },
}));

export const BattleInfo = observer(() => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={1} className={classes.root}>
        <h2>Battle Info</h2>
        <div className="battleInfo">
          <p>Player: N/a</p>
          <p>HP Remaining: N/a</p>
          <p>Currently Attacking: N/a</p>
        </div>
      </Paper>
    </div>
  );
});
