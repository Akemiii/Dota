function GameMode(game_mode) {

    switch (game_mode) {

        case 0:

            return "Unknown";

        case 1:

            return "All Pick";

        case 2:

            return "Captains Mode";

        case 3:

            return "Random Draft";

        case 4:

            return "Single Draft";

        case 5:

            return "All Random";

        case 6:

            return "Intro";

        case 7:

            return "Diretide";

        case 8:

            return "Reverse Captains Mode";

        case 9:

            return "Greeviling";

        case 10:

            return "Tutorial";

        case 11:

            return "Mid Only";

        case 12:

            return "Least Played";

        case 13:

            return "Limited Heroes";

        case 14:

            return "Compedium Matchmaking";

        case 15:

            return "Custom";

        case 16:

            return "Captains draft";

        case 17:

            return "Balanced Draft";

        case 18:

            return "Ability Draft";

        case 19:

            return "Event";

        case 20:

            return "All Random Death Match";

        case 21:

            return "1V1 Mid";

        case 22:

            return "All Draft";

        case 23:

            return "Turbo";

        case 24:

            return "Mutation";


        default:
            return "Unkown";

    }


}

export default GameMode;