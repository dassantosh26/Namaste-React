import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor Called");
  }
  componentDidMount() {
    // console.log("Parent Component Did Mount");
  }

  render() {
    // console.log("Parent Render Called");
    return (
      <div>
        <h1>About Class Component</h1>
        <h2>This Is About Us Page</h2>
        <UserClass name={"First "} location={"Bhabaneswar"} />
      </div>
    );
  }
}
export default About;
