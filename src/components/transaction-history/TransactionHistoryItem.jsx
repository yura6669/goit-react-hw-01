import css from './css/TransactionHistoryItem.module.css';

export const TransactionHistoryItem = ({ id, type, amount, currency, isEven }) => { 
    return (
        <tr key={id}>
            <td className={isEven ? css.transaction__history__item__td__even : css.transaction__history__item__td}>{ type }</td>
            <td className={isEven ? css.transaction__history__item__td__even : css.transaction__history__item__td}>{ amount }</td>
            <td className={isEven ? css.transaction__history__item__td__even : css.transaction__history__item__td}>{ currency }</td>
    </tr>
    );
};