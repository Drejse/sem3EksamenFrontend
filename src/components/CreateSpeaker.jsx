import { useState } from "react";
import userFacade from "../Facades/UserFacade";

const CreateSpeaker = () => {
  const initialValue = {
    name: "",
    profession: "",
    gender: "",
  };

  const [speaker, setSpeaker] = useState(initialValue);

  const handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setSpeaker({ ...speaker, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    userFacade.createSpeaker(speaker);
  };

  return (
    <>
      <div className="speaker">
        <form onSubmit={handleSubmit}>
          <p>name:</p>
          <input
            onChange={handleChange}
            name="name"
            value={speaker.name}
            placeholder="name"
          ></input>

          <br />
          <p>profession:</p>
          <input
            onChange={handleChange}
            name="profession"
            value={speaker.profession}
            placeholder="profession"
          ></input>

          <br />
          <p>gender:</p>
          <input
            onChange={handleChange}
            name="gender"
            value={speaker.gender}
            placeholder="gender"
          ></input>
          <button type="submit">Create Speaker</button>
        </form>
      </div>
    </>
  );
};
export default CreateSpeaker;
