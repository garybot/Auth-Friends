import React from 'react';

const FriendCard = (props) => {
  const friend = props.friend;
  return (
    <article className="friend-card">
      <h3>{friend.name}</h3>
      <p>Age: {friend.age}</p>
      <a href={`mailto: ${friend.email}`}>{friend.email}</a>
    </article>
  );
}

export default FriendCard;