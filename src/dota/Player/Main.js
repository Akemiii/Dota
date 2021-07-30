import React, {useState} from "react";
import axios from 'axios';
import Profile from "./Profile";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";


export default function Main (){

    const [player_id, setPlayerId] = useState("");
    const [loading, setLoading] = useState(false);
    const [players, setPlayers] = useState([]);

    function handlechange (event){
        setPlayerId(event.target.value);
    }

    
    function SearchPlayer(player_id){

        try{
            setLoading(true);
            axios.get("https://api.opendota.com/api/search?q=" + player_id)
            .then(res =>{
                setLoading(false);
                setPlayers(res.data);
            });
        }catch(e){
            console.log(e)
        }

    }

    React.useEffect(() => {
        SearchPlayer(player_id);
      }, [player_id]);


    return(
    <div style={{}}>   

        <div>
            <input placeholder="Nome ou ID" value={player_id} onChange={handlechange}></input>
        </div>
        <div>  
            {
            players.map((player) =>   
                <div style={{
                    display:"flex",
                    flexDirection: "row",
                    alignItems: "center"
                }}>
                    <div>
                     <img style={{height:100, width:100}} src={player.avatarfull} />
                    </div>
                    <div style={{marginLeft: 7, color: "white"}}>  
                        <Link style={{color:"white"}} to={{pathname: "/profile/"+player.account_id, state:{account_id:player.account_id} }} >{ player.personaname}</Link>
                    </div>
                </div>
            )}
        </div>
    </div>
    );
}

