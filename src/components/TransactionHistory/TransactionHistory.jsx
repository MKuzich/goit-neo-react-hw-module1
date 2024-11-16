import css from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.table}>
      <thead>
        <tr>
          <th className={css.headcell}>Type</th>
          <th className={css.headcell}>Amount</th>
          <th className={css.headcell}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr className={css.row} key={id}>
            <td className={css.rowcell}>{type}</td>
            <td className={css.rowcell}>{amount}</td>
            <td className={css.rowcell}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
