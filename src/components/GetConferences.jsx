import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { makeStyles, Container } from "@material-ui/core";
import userFacade from "../Facades/UserFacade";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    alignItems: "center",
  },
}));

export const GetConferences = () => {
  const classes = useStyles();
  const [conferences, setConferences] = useState([]);

  const test = (data) => {
    setConferences(data.all);
  };

  useEffect(() => {
    userFacade.getConferences(test);
  }, []);
  return (
    <Container className={classes.Container}>
      <>
        <table class="table">
          <thead style={{ paddingRight: "20px" }}>
            <th>Conference Name</th>
            <th>Location</th>
            <th>Capacity</th>
            <th>Date</th>
            <th>Time</th>
          </thead>
        </table>
        {conferences.map((conferences) => (
          <tr>
            <td>{conferences.conferenceName} </td>
            <td>{conferences.location} </td>
            <td>{conferences.capacity} </td>
            <td>{conferences.date} </td>
            <td>{conferences.time} </td>
          </tr>
        ))}
        )
      </>
    </Container>
  );
};
