import React, { Component } from "react";
import { render } from "react-dom";

import Header from "./components/Header/Header";
import PostList from "./components/PostList/PostList";

class App extends Component {
  state = {
    users: [
      {
        img:
          "https://cdn.icon-icons.com/icons2/1509/PNG/512/twitterprofile_104337.png",
        name: "Felix",
        time: "há 3 min",
        mensage:
          "Mussum Ipsum, cacilds vidis litro abertis. Copo furadis é disculpa de bebadis, arcu quam euismod magna. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Paisis, filhis, espiritis santis. Cevadis im ampola pa arma uma pindureta."
      }
    ]
  };

  render() {
    return (
      <div>
        <Header />
        <PostList users={this.state.users} />
      </div>
    );
  }
}

render(<App />, document.getElementById("app"));
