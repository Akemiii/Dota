import React, {location} from 'react';
import axios from 'axios';
import Hero from '../Hero/Hero'
import LobbyType from '../Match/LobbyType';
import GameMode from '../Match/GameMode';
import porctWin from './PorcetWin';
import rankTier from './RankTier';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
  useLocation
} from "react-router-dom";


export default class Profile extends React.Component {
    state = {
        dados: [],
        profile: [],
        winLose: [],
        recentmatchs: [],
    }

    componentDidMount() {

        const account_id = this.props.location.state.account_id;

        axios.get(`https://api.opendota.com/api/players/`+account_id)
            .then(res => {
                const dados = res.data;
                const profile = res.data.profile;
                this.setState({ dados, profile });
            })



        axios.get("https://api.opendota.com/api/players/" + account_id + "/wl")
            .then(res => {
                const winLose = res.data;
                this.setState({ winLose });
            })




        axios.get("https://api.opendota.com/api/players/"+ account_id + "/recentMatches")
            .then(res => {
                const recentmatchs = res.data;
                this.setState({ recentmatchs });
            })
    }

    render() {

        

        function checkWin(player_slot, radiant_win) {
            if (player_slot <= 127) {
                if (radiant_win) {
                    return "Won Match";
                } else {
                    return "Lost Match";
                }
            } else {
                if (radiant_win) {
                    return "Lost Match";
                } else {
                    return "Won Match";
                }
            }
        }

        return (
            <div>
                <div

                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        height: '130px'
                    }}

                >

                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            margin: '5px'
                        }}
                    >

                        <img
                            style={{
                                borderRadius: 60,
                                height: 120,
                                width: 120
                            }}
                            src={this.state.profile.avatarfull}
                        />

                    </div>

                    <div
                        style={{
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            padding: '0px',
                            margin: '0px'
                        }}
                    >
                        <div
                            style={{
                                height: '30px'
                            }}
                        >
                            <p>{this.state.profile.personaname}</p>
                        </div>

                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                height: '50px'
                            }}
                        >
                            <div
                                style={{
                                    marginRight: '25px',
                                    padding: '0px',
                                }}
                            >
                                <p style={{}}>Win:</p>
                                <p>{this.state.winLose.win}</p>
                            </div>
                            <div
                                style={{
                                    marginRight: '25px',
                                    marginBottom: '40px',
                                    padding: '0px'
                                }}
                            >
                                <p style={{}}>Lose:</p>
                                <p style={{}}>{this.state.winLose.lose}</p>
                            </div>
                            <div>
                                <div
                                    style={{
                                        marginRight: '25px',
                                        marginBottom: '40px',
                                        padding: '0px'
                                    }}
                                >
                                    <p style={{}}>Win rate:</p>
                                    <p style={{}}>{porctWin(this.state.winLose)}%</p>
                                </div>

                            </div>
                        </div>

                    </div>

                    <div
                        style={{
                            display: 'flex',
                            position: 'relative',
                            flexDirection: 'row',
                            justifyContent: 'center'

                        }}
                    >
                        <img
                            style={{
                                height: 120,
                                width: 120,
                                marginTop:7
                            }}
                            src={rankTier(this.state.dados.rank_tier).image}
                            alt={rankTier(this.state.dados.rank_tier).nome}
                        />
                        <img

                            style={{
                                height: '100px',
                                width: '100px',
                                position: 'absolute'
                            
                            }}
                            src={rankTier(this.state.dados.rank_tier).star}

                        />
                    </div>


                </div>

                <div
                    style={{
                        marginRight: '15px'
                    }}>
                    <div>
                        <div>
                            <span>Recent Matches</span>
                        </div>
                        <div>
                            <div style={{
                                minWidth: '100%'
                            }}>
                                <table style={{
                                    boxSizing: 'border-box',
                                    tableLayout: 'auto',
                                    borderCollapse: 'collapse',
                                    borderSpacing: '0px',
                                    width: '100%'
                                }}>
                                    <thead style={{
                                        display: 'table-header-group',
                                        verticalAlign: 'middle'
                                    }}>
                                        <tr style={{
                                            display: 'table-row', verticalAlign: 'inherit'
                                        }}>
                                            <th style={{ textAlign: 'initial' }}>HERO</th>
                                            <th>RESULT</th>
                                            <th>GAME MODE</th>
                                            <th>DURATION</th>
                                            <th>K</th>
                                            <th>D</th>
                                            <th>A</th>
                                        </tr>
                                    </thead>

                                    <tbody style={{
                                        verticalAlign: 'middle'
                                    }}>

                                        {

                                            this.state.recentmatchs.map((match) =>



                                                <tr style={{
                                                    display: 'table-row',
                                                    verticalAlign: 'inherit',

                                                }}>
                                                    <td>
                                                        <div style={{
                                                            display: 'flex',
                                                            flexDirection: 'row'
                                                        }}>
                                                            <div>
                                                                <img
                                                                    style={{
                                                                        height: 29,
                                                                        width: 52
                                                                    }}
                                                                    src={Hero(match.hero_id).image}
                                                                />
                                                            </div>
                                                            <div style={{
                                                                marginLeft: '5px'
                                                            }}>
                                                                <span><a
                                                                style = {{
                                                                    textDecoration: "none",
                                                                    color: 'white'
                                                                }}
                                                                 href={"https://api.opendota.com/api/matches/" + match.match_id}>{Hero(match.hero_id).nome}</a></span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div>
                                                            <div>
                                                                <span>
                                                                    <a
                                                                    style = {{
                                                                        textDecoration: "none",
                                                                        color: 'white'
                                                                    }}
                                                                     href={"https://api.opendota.com/api/matches/" + match.match_id}>
                                                                        {
                                                                            checkWin(match.player_slot, match.radiant_win)
                                                                        }
                                                                    </a>
                                                                </span>
                                                            </div>
                                                            <div>
                                                                <span>{LobbyType(match.lobby_type)}</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div>
                                                            <div>
                                                                <span>{GameMode(match.game_mode)}</span>
                                                            </div>
                                                            <div>
                                                                <span>Very High</span>
                                                            </div>
                                                        </div>

                                                    </td>
                                                    <td>
                                                        <div>
                                                            <div>
                                                                <span>30:00</span>
                                                            </div>
                                                            <div>
                                                                <span>{match.player_slot <= 127 ? 'Radiant' : 'Dire'}</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div>
                                                            <span>{match.kills}</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div>
                                                            <span>{match.deaths}</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div>
                                                            <span>{match.assists}</span>
                                                        </div>
                                                    </td>
                                                </tr>

                                            )}

                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>

                    <div>

                    </div>
                </div>

            </div>
        )
    }
}