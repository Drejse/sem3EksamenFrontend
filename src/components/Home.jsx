import { useEffect, useState } from "react";
import { makeStyles, Container } from "@material-ui/core";
import "bootstrap/dist/css/bootstrap.min.css";
import CreateConference from "./CreateConference";
import userFacade from "../Facades/UserFacade";
import { GetConferences } from "./GetConferences.jsx";
import CreateSpeaker from "./CreateSpeaker";
import CreateTalk from "./CreateTalk";

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
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    userFacade.deleteTalk();
  };

  return (
    <Container className={classes.Container}>
      <>
        <div className="home" style={{ marginTop: "100px" }}>
          <h4>Welcome</h4>

          <tbody>
            <GetConferences />
          </tbody>
          <form onSubmit={handleSubmit}>
            <input placeholder="Enter Id of talk to delete" />
            <button type="submit">Delete Talk</button>
          </form>
          <div style={{ maxWidth: "1000px" }}>
            <CreateConference />
            <CreateSpeaker />
            <CreateTalk />
          </div>
        </div>
      </>
    </Container>
  );
};
