import React from "react";

class ChildComponent extends React.Component {
  state = {
    showJobs: false,
  };

  handleShowHide = () => {
    this.setState({
      showJobs: !this.state.showJobs,
    });
  };

  handleOnClickDelete = (job) => {
    console.log(">>> handleOnClickDelelt", job);
    this.props.deleteAJob(job);
  };

  render() {
    console.log(">>>check prop: ", this.props);
    let { showJobs } = this.state;
    let check = showJobs === true ? "showJobs = true" : "showJobs = false";

    let { arrJobs } = this.props;
    console.log(">>>check showJob", check);
    return (
      //return về 1 khối duy nhất.
      <>
        {showJobs === false ? (
          <div>
            <button onClick={() => this.handleShowHide()}>Show</button>
          </div>
        ) : (
          <>
            <div className="job-lists">
              {arrJobs.map((item, index) => {
                return (
                  <div key={item.id}>
                    {item.title} - {item.salary}
                    <></> {}
                    <span onClick={() => this.handleOnClickDelete(item)}>
                      x
                    </span>
                  </div>
                );
              })}
            </div>
            <div>
              <button onClick={(event) => this.handleShowHide(event)}>
                Hide
              </button>
            </div>
          </>
        )}
      </>
    );
  }
}

export default ChildComponent;
