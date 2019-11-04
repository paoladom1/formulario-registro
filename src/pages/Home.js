import React from "react";
import RegisterForm from "../components/forms/RegisterForm";
import ScheduleTable from "../components/table/ScheduleTable";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      carnet: "",
      schedule: "",
      registers: []
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.carnet.length !== 0 && this.state.schedule !== 0) {
      this.setState({
        registers: this.state.registers.concat({
          carnet: this.state.carnet,
          schedule: this.state.schedule,
          entryTime: new Date()
        }),
        carnet: "",
        schedule: ""
      });
    }
  };

  render() {
    return (
      <div className="container">
        <RegisterForm
          data={this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <ScheduleTable registers={this.state.registers} />
      </div>
    );
  }
}

export default Home;