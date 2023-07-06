import PlayerCard from "./PlayerCard";
import playerss from "./playerss";

//map le tableau d'objet pour cree une carte a chaque player

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