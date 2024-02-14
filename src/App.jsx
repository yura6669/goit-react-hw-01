import { Profile } from './components/profile/Profile';
import { FriendList } from './components/friendList/FriendList';
import { TransactionHistory } from './components/transaction-history/TransactionHistory';
import user from './data/user.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';

function App() {
  return (
    <>
      <Profile
        name={user.username}
        tag={user.tag}
        location={user.location}
        image={user.avatar}
        stats={user.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  );
}

export default App;
