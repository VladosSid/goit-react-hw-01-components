import { Profile } from './Profile/Profile';
import userCard from '../user.json';

export const App = () => {
  return (
    <>
      <Profile user={userCard} />
    </>
  );
};
