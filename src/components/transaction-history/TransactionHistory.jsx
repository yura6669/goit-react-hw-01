import { TransactionHistoryItem } from './TransactionHistoryItem';
import css from './css/TransactionHistory.module.css';

export const TransactionHistory = ({ transactions }) => {
  return (
    <table className={css.transaction__history__table}>
      <thead className={css.transaction__history__thead}>
        <tr>
          <th className={css.transaction__history__thead__tr}>Type</th>
          <th className={css.transaction__history__thead__tr}>Amount</th>
          <th className={css.transaction__history__thead__tr}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(transaction => {
          const index = transactions.indexOf(transaction);
          const type =
            transaction.type.charAt(0).toUpperCase() +
            transaction.type.slice(1);
          return (
            <TransactionHistoryItem
              key={transaction.id}
              type={type}
              amount={transaction.amount}
              currency={transaction.currency}
              isEven={index % 2 === 0}
            />
          );
        })}
      </tbody>
    </table>
  );
};
