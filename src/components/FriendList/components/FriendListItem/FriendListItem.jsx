import PropTypes from 'prop-types';
import { Card, CheckOnline, Avatar, Name } from './FriendListItem.styled';

export const FriendListItem = ({ friends }) => {
  return (
    <>
      {friends.map(friend => (
        <Card key={friend.id}>
          <CheckOnline isOnline={friend.isOnline}></CheckOnline>
          <Avatar src={friend.avatar} alt={friend.name} />
          <Name>{friend.name}</Name>
        </Card>
      ))}
    </>
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
