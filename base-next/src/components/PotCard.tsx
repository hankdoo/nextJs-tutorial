import { useAppContext } from "../context/Context";

const PotCard = () => {
  const {
    
  } = useAppContext();
  // console.log(isMasterInitialized)
 
  return (
    <div className={"wrapper"}>
      <div className={"title"}>
        Lottery <span className={"textAccent"}>#</span>
      </div>
      <div className={"pot"}>Pot 🍯:  SOL</div>
      <div className={"recentWinnerTitle"}>🏆Recent Winner🏆</div>
   
    </div>
  );
};

export default PotCard;
