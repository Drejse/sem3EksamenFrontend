import { useState } from "react";
import userFacade from "../Facades/UserFacade";

const CreateTalk = () => {
  const initialValue = {
    Topic: "",
    Duration: "",
    Proplist: "",
  };

  const [talk, setTalk] = useState(initialValue);

  const handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setTalk({ ...talk, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    userFacade.createTalk(talk);
  };

  return (
    <>
      <div className="Topic">
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            name="Topic"
            value={talk.Topic}
            placeholder="Topic"
          ></input>

          <br />

          <input
            onChange={handleChange}
            name="Duration"
            value={talk.Duration}
            placeholder="Duration"
          ></input>

          <br />

          <input
            onChange={handleChange}
            name="Proplist"
            value={talk.Proplist}
            placeholder="Proplist"
          ></input>

          <button type="submit">Create Talk</button>
        </form>
      </div>
    </>
  );
};
export default CreateTalk;
