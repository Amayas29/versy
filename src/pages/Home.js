import React from "react";
import MenuContainer from "../components/containers/MenuContainer";
import MainContainer from "../components/containers/MainContainer";
import FeedContainer from "../components/containers/FeedContainer";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      token: "a",
      setPage: props.setPage,
    };
  }

  render() {
    return (
      <div className="app">
        <MenuContainer setPage={this.state.setPage} />
        <MainContainer>
          <FeedContainer />
        </MainContainer>
      </div>
    );
  }
}

export default Home;
