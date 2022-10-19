import { Profile } from './Profile/Profile';
import userCard from '../user.json';

import { Statistics } from './Stats/Statistics';
import data from '../data.json';

export const App = () => {
  return (
    <>
      <Profile user={userCard} />
      <Statistics stats={data} title="upload stats" />
    </>
  );
};
