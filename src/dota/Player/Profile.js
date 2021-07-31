import React from 'react';
import axios from 'axios';
import porctWin from './PorcetWin';
import rankTier from './RankTier';
import RecentMatchs from '../Match/RecentMatchs';


export default class Profile extends React.Component {
    state = {
        dados: [],
        profile: [],
        winLose: [],
        account_id: []
    }

    CallRecentMatchs(){
        const account_id = this.props.location.state.account_id;

        return <RecentMatchs state={account_id} />
    }   

    componentDidMount() {

        const account_id = this.props.location.state.account_id;

        this.setState({account_id})

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

    }

    render() {
         

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
                        {this.CallRecentMatchs()}
                    <div>

                    </div>
                </div>

            </div>
        )
    }
}