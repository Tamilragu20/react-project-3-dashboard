import './DashboardCard.css';

function DashboardCard({ title, value, change, trend, subtitle, accent }) {
  return (
    <article className={`kpi-card accent-${accent}`}>
      <div className="kpi-top">
        <span className="kpi-title">{title}</span>
        <span className={`kpi-change ${trend === 'up' ? 'is-up' : 'is-down'}`}>
          {change}
        </span>
      </div>
      <div className="kpi-value">{value}</div>
      <p className="kpi-subtitle">{subtitle}</p>
    </article>
  );
}

export default DashboardCard;
