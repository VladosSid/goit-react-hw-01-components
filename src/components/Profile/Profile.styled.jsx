import styled from '@emotion/styled';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 300px;

  border: solid 1px #000;
  border-radius: 10px;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 28px;

  padding: 8px;
  padding-bottom: 20px;
`;

export const UserPhoto = styled.img`
  width: 200px;
  border-radius: 50%;
  border: solid 1px #000;
`;

export const Name = styled.p`
  font-size: 25px;
  font-weight: 700;
`;

export const Tag = styled.p`
  color: #a4a3a3;
`;

export const Location = styled.p`
  color: #a4a3a3;
  font-size: 20px;
`;

export const ActivityList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  gap: 8px;

  padding: 8px;

  border-top: solid 1px;
  border-radius: inherit;

  background: #a4a3a3;
`;

export const Activity = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;
  align-items: center;
  width: 100px;
`;
