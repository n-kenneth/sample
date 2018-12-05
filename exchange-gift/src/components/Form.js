import React, { Component } from "react";

class Form extends Component {
  name01Ref = React.createRef();
  email01Ref = React.createRef();

  name02Ref = React.createRef();
  email02Ref = React.createRef();

  name03Ref = React.createRef();
  email03Ref = React.createRef();

  name04Ref = React.createRef();
  email04Ref = React.createRef();

  handleSubmit = event => {
    event.preventDefault();
    const users = [
      {
        name: this.name01Ref.current.value,
        email: this.email01Ref.current.value
      },
      {
        name: this.name02Ref.current.value,
        email: this.email02Ref.current.value
      },
      {
        name: this.name03Ref.current.value,
        email: this.email03Ref.current.value
      },
      {
        name: this.name04Ref.current.value,
        email: this.email04Ref.current.value
      }
    ];
    console.log(users);
    this.props.handleSend(users);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <ul>
          <li>
            <input type="text" placeholder="name" ref={this.name01Ref} />
            <input type="email" placeholder="email" ref={this.email01Ref} />
          </li>
          <li>
            <input type="text" placeholder="name" ref={this.name02Ref} />
            <input type="email" placeholder="email" ref={this.email02Ref} />
          </li>
          <li>
            <input type="text" placeholder="name" ref={this.name03Ref} />
            <input type="email" placeholder="email" ref={this.email03Ref} />
          </li>
          <li>
            <input type="text" placeholder="name" ref={this.name04Ref} />
            <input type="email" placeholder="email" ref={this.email04Ref} />
          </li>
        </ul>

        <div className="button-list">
          {/* <button className="btn-add" onClick={this.props.handleAddInput}>
            Add +
          </button> */}
          <button className="btn-send">Send</button>
        </div>
      </form>
    );
  }
}

export default Form;
