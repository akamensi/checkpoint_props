import PlayerCard from "./PlayerCard";
import playerss from "./playerss";



const Playerlist=({el})=>{
    return(
        <>
        {
        playerss.map((el,i,t)=> <PlayerCard Key={i} el={el}/>)
        }
        </>
    
    )
};

export default Playerlist