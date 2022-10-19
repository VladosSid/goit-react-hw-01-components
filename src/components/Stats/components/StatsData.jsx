export const StatsData = stats => {
  return (
    <li>
      <span>{stats.label}</span>
      <span>{stats.percentage}</span>
    </li>
  );
};
