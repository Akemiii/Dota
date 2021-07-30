import React from "react";
import axios from "axios";


export default class Match extends React.Component {
    state = {
        matchInfo: [],
    }

    componentDidMount(){

        const match_id = this.props.location.state.match_id;


        axios.get(`https://api.opendota.com/api/matches/`+match_id)
        .then(res => {
            const matchInfo = res.data;
            this.setState({ matchInfo });
        })
        
    }



    render() {

        {console.log(this.state.matchInfo)}

        return (
        <div>
            <div style={{display:"flex",
            justifyContent:"center",
            flexDirection:"column"
        }}>
                <div>
                    <span>{this.state.matchInfo.radiant_win? "Radiant Win" : " Dire Win" }</span>
                </div>
                <div style={{display:"flex",
                        justifyContent:"center",
                        flexDirection:"row"
                }}>
                    <div style={{marginRight: 5}}>
                        <span style={{marginRight: 5 }}>
                            Dire
                        </span>
                        <span>
                            {this.state.matchInfo.radiant_score}
                        </span>
                    </div>
                    <div>
                        <span style={{marginRight: 5 }}>Radiant</span>
                        <span> {this.state.matchInfo.dire_score}</span>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
      );
    }
}