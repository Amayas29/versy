import axios from "axios";
import React from "react";

class AnalyticsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stats: {},
    };
  }

  UNSAFE_componentWillMount() {
    axios
      .get("http://localhost:4000/api/users/stats")
      .then((res) => {
        this.setState({ stats: res.data.stats });
      })
      .catch((err) => {
        console.dir(err);
      });
  }

  render() {
    const stats = this.state.stats;

    const statsItems = [];

    for (let stat in stats)
      statsItems.push(<StatItem key={stat} name={stat} value={stats[stat]} />);

    return <section className="central-container">{statsItems}</section>;
  }
}

const StatItem = (props) => {
  return (
    <div className="stat-item">
      <div className="stat-name">{props.name}</div>
      <div className="stat-value">{props.value}</div>
    </div>
  );
};

export default AnalyticsContainer;
