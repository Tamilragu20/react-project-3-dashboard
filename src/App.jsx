import { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import DashboardCard from './components/DashboardCard';
import Statistics from './components/Statistics';
import RecentActivities from './components/RecentActivities';
import {
  channelBreakdown,
  kpiByTimeframe,
  monthlyPerformance,
  recentActivitiesData,
  sidebarNavItems,
} from './data/dashboardData';

function App() {
  const [activeSection, setActiveSection] = useState('overview');
  const [timeframe, setTimeframe] = useState('30d');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const activeNav =
    sidebarNavItems.find((item) => item.id === activeSection) ?? sidebarNavItems[0];
  const currentKpis = kpiByTimeframe[timeframe];

  return (
    <div className="dashboard-layout">
      <Sidebar
        navItems={sidebarNavItems}
        activeSection={activeSection}
        onSelectSection={setActiveSection}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="dashboard-workspace">
        <Navbar
          activeLabel={activeNav.label}
          timeframe={timeframe}
          onTimeframeChange={setTimeframe}
          onToggleSidebar={() => setSidebarOpen((prev) => !prev)}
        />

        <main className="dashboard-content">
          <section className="kpi-grid" aria-label="Key Performance Indicators">
            {currentKpis.map((card) => (
              <DashboardCard
                key={card.id}
                title={card.title}
                value={card.value}
                change={card.change}
                trend={card.trend}
                subtitle={card.subtitle}
                accent={card.accent}
              />
            ))}
          </section>

          <div className="analytics-grid">
            <Statistics
              monthlyData={monthlyPerformance}
              channels={channelBreakdown}
            />
            <RecentActivities activities={recentActivitiesData} />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
