import users from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
import css from './App.module.css';

import { Profile } from './Profile/Profile';
import { FriendList } from './FriendList/FriendList';
import { Statistics } from './Statistics/Statistics';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div>
      <section className={css.name}>
        {users.map(user => {
          return (
            <Profile
              username={user.username}
              tag={user.tag}
              location={user.location}
              avatar={user.avatar}
              stats={user.stats}
            />
          );
        })}
      </section>
      <section className={css.name}>
        {data.map(statistics => {
          return (
            (<Statistics title="Upload stats" stats={data} />),
            (<Statistics stats={data} />)
          );
        })}
      </section>
      <section className={css.name}>
        {friends.map(friendList => {
          return <FriendList friends={friends} />;
        })}
      </section>
      <section className={css.name}>
        {transactions.map(transactionHistory => {
          return <TransactionHistory items={transactions} />;
        })}
      </section>
    </div>
  );
};
