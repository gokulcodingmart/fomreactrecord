import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //   count: this.props.counters.value,
  //   tags: ["s1", "s2", "s3"]
  // };

  // increment = product => {
  //   this.setState({ count: this.state.count + 1 });
  //   console.log("clicked", product);
  // };

  render() {
    let sty = this.badgestyle();
    return (
      <div>
        <h1 className={sty}>hello world counter:{this.formatCount()}</h1>
        <button
          onClick={() => this.props.onIncrement(this.props.counters)}
          className="btn btn-primary"
        >
          +
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counters.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
  // tagsmethod() {
  //   if (this.state.tags.length === 0) return <p>no tags</p>;
  //   return (
  //     <ul>
  //       {this.state.tags.map(tag => (
  //         <li key={tag.id}>{tag}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  badgestyle() {
    let sty = "m-2 badge badge-";
    const { value } = this.props.counters;
    sty += value === 0 ? "warning" : "primary";
    return sty;
  }

  formatCount() {
    const { value } = this.props.counters;
    return value === 0 ? "zero" : value;
  }
}

export default Counter;
