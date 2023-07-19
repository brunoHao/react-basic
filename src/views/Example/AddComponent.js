import React from "react";

class AddComponent extends React.Component {
  state = {
    titleJob: "",
    salary: "",
  };

  handleChangeTitle = (event) => {
    this.setState({
      titleJob: event.target.value,
    });
  };

  handleChangeSalary = (event) => {
    this.setState({
      salary: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (!this.state.titleJob || !this.state.salary) {
      alert("missing data");
      return;
    }
    console.log("check data", this.state);
    this.props.addNewJob({
      id: Math.floor(Math.random() * 100),
      title: this.state.titleJob,
      salary: this.state.salary,
    });

    this.setState({
      titleJob: "",
      salary: "",
    });
  };

  render() {
    return (
      <>
        <form>
          <label for="fname">Job's title:</label>
          <br />
          <input
            type="text"
            value={this.state.titleJob}
            onChange={(event) => this.handleChangeTitle(event)}
          />
          <br />
          <label for="lname">Salary:</label>
          <br />
          <input
            type="text"
            value={this.state.salary}
            onChange={(event) => this.handleChangeSalary(event)}
          />
          <br />
          <input
            type="submit"
            value="Submit"
            onClick={(event) => this.handleSubmit(event)}
          />
        </form>
      </>
    );
  }
}

export default AddComponent;
