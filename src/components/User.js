import { useState } from "react";

const User = ({ name }) => {
  const [count, setCount] = useState(0);

  return (
    <div className="user-card">
      <h1>Count : {count}</h1>

      <button onClick={() => setCount(count + 1)}>+</button>
      <h2>Name:{name}</h2>
      <h3>Location:Bengaluru</h3>
      <h4>Contact:@santosh26</h4>
    </div>
  );
};
export default User;
