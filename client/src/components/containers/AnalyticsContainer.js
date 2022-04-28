import React from "react";

const AnalyticsContainer = () => {
  // Todo
  const stats = {};

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
