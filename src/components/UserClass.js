import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "default",
      },
    };
    // console.log(this.props.name + "Child Constructor Called");
  }
  async componentDidMount() {
    // console.log(this.props.name + "Child Component Did Mount");
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const res = await data.json();

    this.setState({
      userInfo: res,
    });
    // console.log(res);
  }
  componentDidUpdate() {
    // console.log("componet Did Updat Called");
  }
  componentWillUnmount() {
    // console.log("componentWillUnmount Called");
  }
  render() {
    // console.log(this.props.name + "Child Rendered Called");
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name:{name}</h2>
        <h3>Location:{location}</h3>
        <h4>Contact:@santosh26</h4>
      </div>
    );
  }
}
export default UserClass;
