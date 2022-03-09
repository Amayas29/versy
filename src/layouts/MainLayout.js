import React from "react";
import MenuContainer from "../components/containers/MenuContainer";
import MainContainer from "../components/containers/MainContainer";

import FeedContainer from "../components/containers/FeedContainer";

class MainLayout extends React.Component {
  constructor(props) {
    super(props);

    this.setMainContainer = this.setMainContainer.bind(this);
    this.state = {
      mainContainer: null,
    };
  }

  componentDidMount() {
    this.setMainContainer(
      <FeedContainer setMainContainer={this.setMainContainer} />
    );
  }

  setMainContainer(container) {
    this.setState({
      mainContainer: container,
    });
  }

  render() {
    return (
      <div className="app">
        <MenuContainer
          setPage={this.props.setPage}
          setMainContainer={this.setMainContainer}
        />

        <MainContainer setMainContainer={this.setMainContainer}>
          {this.state.mainContainer}
        </MainContainer>
      </div>
    );
  }
}

export default MainLayout;
