import { useState } from "react";
import userFacade from "../Facades/UserFacade";

const CreateConference = () => {
  const initialValue = {
    conferenceName: "",
    location: "",
    capacity: "",
    date: "",
    time: "",
  };

  const [conference, setConference] = useState(initialValue);

  const handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setConference({ ...conference, [name]: value });

    console.log(conference.name);
    console.log(conference.pLanguage);
    console.log(conference.yearsOfExperience);
    console.log(conference.pricePrHour);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    userFacade.createConference(conference);
  };

  return (
    <>
      <div className="conference">
        <form onSubmit={handleSubmit}>
          <p>conferenceName:</p>
          <input
            onChange={handleChange}
            name="conferenceName"
            value={conference.conferenceName}
            placeholder="conferenceName"
          ></input>

          <br />
          <p>location:</p>
          <input
            onChange={handleChange}
            name="location"
            value={conference.location}
            placeholder="location"
          ></input>

          <br />
          <p>capacity:</p>
          <input
            onChange={handleChange}
            name="capacity"
            value={conference.capacity}
            placeholder="capacity"
          ></input>

          <br />
          <p>date:</p>
          <input
            onChange={handleChange}
            name="date"
            value={conference.date}
            placeholder="date"
          ></input>

          <br />
          <p>time:</p>
          <input
            onChange={handleChange}
            name="time"
            value={conference.time}
            placeholder="time"
          ></input>

          <br />
          <button type="submit">Create Conference</button>
        </form>
      </div>
    </>
  );
};
export default CreateConference;
