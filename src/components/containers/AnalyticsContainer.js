import React from "react";
import { getUserStats } from "../../data/data";

const AnalyticsContainer = () => {
  const stats = getUserStats("1");

  const statsItems = [];

  for (let stat in stats) {
    statsItems.push(<StatItem key={stat} name={stat} value={stats[stat]} />);
  }

  return <section className="central-container">{statsItems}</section>;
};

const StatItem = (props) => {
  return (
    <div className="stat-item">
      <div className="stat-name">{props.name}</div>
      <div className="stat-value">{props.value}</div>
    </div>
  );
};

export default AnalyticsContainer;
