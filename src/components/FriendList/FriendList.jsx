import PropTypes from 'prop-types';
import { FriendListItem } from './components/FriendListItem/FriendListItem';
import { CardList } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <CardList>
      <FriendListItem friends={friends} />
    </CardList>
  );
};

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
