function LobbyType(lobby_type) {
    switch (lobby_type) {
        
        case 0:
            return "Normal";

        case 1:
            return "Practice";

        case 2:

            return "Tournament";

        case 3:

            return "Tutorial";

        case 4:

            return "Coop Bots";

        case 5:

            return "Ranked Team";

        case 6:

            return "Ranked";

        case 7:

            return "Ranked";

        case 8:

            return "1V1 Mid";
 
        case 9:

            return "Battle Cup";
    }

}

export default LobbyType;