import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Form from "./Form";
import NodeMailer from "nodemailer";

class App extends Component {
  state = {
    users: []
  };

  randomName = (names, emails) => {
    const random = [];
    const theNames = [...names];
    const mails = [...emails];
    theNames.map((name, i) => {
      let rand = Math.floor(Math.random() * mails.length + 1);
      let obj = { name: name, email: mails[rand - 1] };
      mails.splice(rand - 1, 1);
      return random.push(obj);
    });
    return random;
  };

  handleSend = users => {
    const names = users.map(user => user.name);
    const emails = users.map(user => user.email);
    const random = this.randomName(names, emails);
    this.setState({ users: random });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Form handleSend={this.handleSend} />
        <Footer />
      </div>
    );
  }
}

export default App;
