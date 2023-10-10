import { useAppContext } from "../context/Context";
import style from "../styles/Table.module.css";
import TableRow from "./TableRow";

const Table = () => {
  const {  } = useAppContext();

  return (
    <div className={style.wrapper}>
      <div className={style.tableHeader}>
        <div className={style.addressTitle}>💳 Lottery</div>
        <div className={style.addressTitle}>💳 Address</div>
        <div className={style.addressTitle}>💳 Ticket</div>
        <div className={style.amountTitle}>💲 Amount</div>
      </div>
     
    </div>
  );
};

export default Table;
