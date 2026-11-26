import { useState } from 'react';
import './RecentActivities.css';

const STATUS_OPTIONS = ['All', 'Completed', 'Pending', 'Refunded'];

function RecentActivities({ activities }) {
  const [statusFilter, setStatusFilter] = useState('All');

  const visibleActivities =
    statusFilter === 'All'
      ? activities
      : activities.filter((item) => item.status === statusFilter);

  return (
    <section className="activity-panel" aria-label="Recent Activities">
      <div className="activity-header">
        <div>
          <h2 className="panel-title">Recent Activities</h2>
          <p className="panel-subtitle">Latest transactions and customer actions</p>
        </div>

        <div className="status-filters">
          {STATUS_OPTIONS.map((status) => (
            <button
              key={status}
              type="button"
              className={`status-chip ${statusFilter === status ? 'is-active' : ''}`}
              onClick={() => setStatusFilter(status)}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      <ul className="activity-list">
        {visibleActivities.map((item) => (
          <li key={item.id} className="activity-row">
            <div className="activity-main">
              <div className="activity-user-row">
                <span className="activity-user">{item.user}</span>
                <span className="activity-id">{item.id}</span>
              </div>
              <p className="activity-desc">{item.action}</p>
            </div>

            <div className="activity-meta">
              <span className="activity-amount">{item.amount}</span>
              <div className="activity-status-row">
                <span className={`status-pill status-${item.status.toLowerCase()}`}>
                  {item.status}
                </span>
                <span className="activity-time">{item.time}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default RecentActivities;
