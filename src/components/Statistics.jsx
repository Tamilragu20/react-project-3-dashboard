import './Statistics.css';

function Statistics({ monthlyData, channels }) {
  return (
    <section className="stats-panel" aria-label="Statistics Overview">
      <div className="panel-header">
        <div>
          <h2 className="panel-title">Performance Statistics</h2>
          <p className="panel-subtitle">Monthly revenue vs. order volume index</p>
        </div>
        <div className="legend-row">
          <span className="legend-item">
            <span className="legend-dot rev" /> Revenue
          </span>
          <span className="legend-item">
            <span className="legend-dot ord" /> Orders
          </span>
        </div>
      </div>

      <div className="bar-chart">
        {monthlyData.map((entry) => (
          <div key={entry.month} className="bar-group">
            <div className="bar-pair">
              <div
                className="bar rev-bar"
                style={{ height: `${entry.revenue}%` }}
                title={`${entry.month} Revenue Index: ${entry.revenue}%`}
              />
              <div
                className="bar ord-bar"
                style={{ height: `${entry.orders}%` }}
                title={`${entry.month} Orders Index: ${entry.orders}%`}
              />
            </div>
            <span className="bar-label">{entry.month}</span>
          </div>
        ))}
      </div>

      <div className="channels-block">
        <h3 className="channels-heading">Revenue by Channel</h3>
        <div className="channels-list">
          {channels.map((channel) => (
            <div key={channel.id} className="channel-row">
              <div className="channel-info">
                <span>{channel.label}</span>
                <strong>{channel.amount} ({channel.share}%)</strong>
              </div>
              <div className="channel-track">
                <div
                  className="channel-fill"
                  style={{ width: `${channel.share}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Statistics;
