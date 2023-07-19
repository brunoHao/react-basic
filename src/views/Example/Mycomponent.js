import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class Mycomponent extends React.Component {
  state = {
    arrJobs: [
      { id: "1", title: "Developer", salary: "500" },
      { id: "2", title: "Testers", salary: "400" },
      { id: "3", title: "Project Manager", salary: "3000" },
    ],
  };

  addNewJob = (job) => {
    console.log(">>>check job from parent", job);
    this.setState({
      arrJobs: [...this.state.arrJobs, job],
    });
  };

  render() {
    return (
      //return về 1 khối duy nhất.
      <>
        <AddComponent addNewJob={this.addNewJob} />
        <ChildComponent arrJobs={this.state.arrJobs} />
      </>
    );
  }
}

export default Mycomponent;
