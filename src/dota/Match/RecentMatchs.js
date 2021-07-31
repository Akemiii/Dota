import React from "react";
import axios from "axios";
import Hero from '../Hero/Hero'
import LobbyType from '../Match/LobbyType';
import GameMode from '../Match/GameMode';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";


export default class RecentMatchs extends React.Component {
    state = {
        account_id:[],
        recentmatchs: [],
    }

    componentDidMount() {
  
       const {state} = this.props

        axios.get("https://api.opendota.com/api/players/" + state + "/recentMatches")
            .then(res => {
                const recentmatchs = res.data;
                console.log(recentmatchs)
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
                                                        <span><Link
                                                            style={{
                                                                textDecoration: "none",
                                                                color: 'white'
                                                            }}
                                                            to={{ pathname: "/match/" + match.match_id, state: { match_id: match.match_id } }} >{Hero(match.hero_id).nome}</Link></span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <div>
                                                        <span>
                                                            <Link
                                                                style={{
                                                                    textDecoration: "none",
                                                                    color: 'white'
                                                                }}
                                                                to={{ pathname: "/match/" + match.match_id, state: { match_id: match.match_id } }}>
                                                                {
                                                                    checkWin(match.player_slot, match.radiant_win)
                                                                }
                                                            </Link>
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

        );
    }
}