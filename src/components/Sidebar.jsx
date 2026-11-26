import './Sidebar.css';

function Sidebar({ navItems, activeSection, onSelectSection, isOpen, onClose }) {
  return (
    <aside className={`admin-sidebar ${isOpen ? 'is-open' : ''}`} aria-label="Sidebar Navigation">
      <div className="sidebar-header">
        <div className="sidebar-brand">
          <span className="sidebar-logo">PO</span>
          <div>
            <span className="sidebar-title">PulseOps</span>
            <span className="sidebar-subtitle">Admin Console</span>
          </div>
        </div>
        <button
          type="button"
          className="sidebar-close"
          onClick={onClose}
          aria-label="Close sidebar"
        >
          Close
        </button>
      </div>

      <nav className="sidebar-nav">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              type="button"
              className={`sidebar-link ${isActive ? 'is-active' : ''}`}
              onClick={() => {
                onSelectSection(item.id);
                onClose();
              }}
            >
              <span>{item.label}</span>
              {item.badge && <span className="sidebar-badge">{item.badge}</span>}
            </button>
          );
        })}
      </nav>

      <div className="sidebar-footer">
        <p className="system-status">
          <span className="status-dot" />
          All services operational
        </p>
        <p className="system-version">Release v2.4.0</p>
      </div>
    </aside>
  );
}

export default Sidebar;
