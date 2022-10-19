// import PropTypes from 'prop-types';
import { StatsData } from './components/StatsData';

export const Statistics = ({ stats, title }) => {
  return (
    <section>
      <h2>{title}</h2>

      <ul>
        <StatsData data={stats} />
      </ul>
    </section>
  );
};
