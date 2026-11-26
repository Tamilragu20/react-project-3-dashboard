import './Navbar.css';

function Navbar({ activeLabel, timeframe, onTimeframeChange, onToggleSidebar }) {
  return (
    <header className="admin-navbar">
      <div className="navbar-left">
        <button
          type="button"
          className="sidebar-trigger"
          onClick={onToggleSidebar}
          aria-label="Open navigation sidebar"
        >
          Menu
        </button>
        <div>
          <h1 className="navbar-heading">{activeLabel}</h1>
          <p className="navbar-caption">Real-time operational metrics and activity feed</p>
        </div>
      </div>

      <div className="navbar-right">
        <label className="timeframe-control">
          <span className="sr-only">Timeframe</span>
          <select
            value={timeframe}
            onChange={(event) => onTimeframeChange(event.target.value)}
            className="timeframe-select"
            aria-label="Select dashboard timeframe"
          >
            <option value="7d">Last 7 Days</option>
            <option value="30d">Last 30 Days</option>
            <option value="90d">Last 90 Days</option>
          </select>
        </label>

        <div className="admin-profile">
          <span className="admin-avatar">RS</span>
          <span className="admin-name">Ragu Admin</span>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
