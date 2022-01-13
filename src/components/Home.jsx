import { useEffect, useState } from "react";
import { makeStyles, Container } from "@material-ui/core";
import "bootstrap/dist/css/bootstrap.min.css";
import userFacade from "../Facades/UserFacade";
import { GetConferences } from "./GetConferences.jsx";
import Admin from "./Admin";
const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    alignItems: "center",
  },
}));

export const Home = (props) => {
  const classes = useStyles();
  const [conferences, setConferences] = useState([]);

  const test = (data) => {
    setConferences(data.all);
  };

  useEffect(() => {
    userFacade.getConferences(test);
    console.log(conferences);
  });

  return (
    <Container className={classes.Container}>
      <>
        <div className="home" style={{ marginTop: "100px" }}>
          <h4>Welcome </h4>

          <tbody>
            <GetConferences />
          </tbody>
        </div>
      </>
      <Admin />
    </Container>
  );
};
