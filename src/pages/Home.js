import React from "react";
import RegisterForm from "../components/forms/RegisterForm";
import ScheduleTable from "../components/table/ScheduleTable";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      carnet: "",
      schedule: "",
      registers: [],
      isLate: false,
      lastId: 0
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleToggle = e => {
    this.setState({
      [e.target.name]: !this.state.isLate
    });
  };

  handleRegisterDelete = e => {
    this.setState(
      {
        registers: this.state.registers.filter(register => {
          return register.id !== Number(e.target.name);
        })
      },
      () => console.log(this.state)
    );
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.carnet.length !== 0 && this.state.schedule.length !== 0) {
      this.setState({
        registers: this.state.registers.concat({
          carnet: this.state.carnet,
          schedule: this.state.schedule,
          entryTime: new Date(),
          isLate: this.state.isLate,
          id: this.state.lastId
        }),
        carnet: "",
        schedule: "",
        isLate: false,
        lastId: this.state.lastId + 1
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
          handleToggle={this.handleToggle}
        />
        <ScheduleTable
          registers={this.state.registers}
          handleRegisterDelete={this.handleRegisterDelete}
        />
      </div>
    );
  }
}

export default Home;
