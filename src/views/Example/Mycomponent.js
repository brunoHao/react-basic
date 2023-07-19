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
    // let currentJobs = this.state.arrJobs;
    // currentJobs.push(job);
    this.setState({
      arrJobs: [...this.state.arrJobs, job], //... is copy (copy current arrJobs) , is push
      //   arrJobs: currentJobs,
    });
  };

  deleteAJob = (job) => {
    console.log(">>>check delete job from parent", job);
    let currentJobs = this.state.arrJobs;
    // currentJobs.pop(job);
    currentJobs = currentJobs.filter((item) => item.id !== job.id);

    this.setState({
      arrJobs: currentJobs,
    });
  };

  render() {
    return (
      //return về 1 khối duy nhất.
      <>
        <AddComponent addNewJob={this.addNewJob} />
        <ChildComponent
          arrJobs={this.state.arrJobs}
          deleteAJob={this.deleteAJob}
        />
      </>
    );
  }
}

export default Mycomponent;
