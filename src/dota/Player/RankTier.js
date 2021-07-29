function medal(n) {
    switch (n) {
        case 1:
            return "https://www.opendota.com/assets/images/dota2/rank_icons/rank_icon_1.png"

        case 2:
            return "https://www.opendota.com/assets/images/dota2/rank_icons/rank_icon_2.png"

        case 3:
            return "https://www.opendota.com/assets/images/dota2/rank_icons/rank_icon_3.png"

        case 4:
            return "https://www.opendota.com/assets/images/dota2/rank_icons/rank_icon_4.png"

        case 5:
            return "https://www.opendota.com/assets/images/dota2/rank_icons/rank_icon_5.png"

        case 6:
            return "https://www.opendota.com/assets/images/dota2/rank_icons/rank_icon_6.png"

        case 7:
            return "https://www.opendota.com/assets/images/dota2/rank_icons/rank_icon_7.png"

        case 8:
            return "https://www.opendota.com/assets/images/dota2/rank_icons/rank_icon_8.png"

        default:
            return "Unkown";
    }

}


function rankTier(rank_tier) {


    var obj = {};

    switch (rank_tier) {
        case 11:
            obj.nome = "Herald[1]";
            obj.image = medal(1);
            obj.star = "https://www.opendota.com/assets/images/dota2/rank_icons/rank_star_1.png"
            return obj;

        case 12:
            obj.nome = "Herald[2]";
            obj.image = medal(1);
            obj.star = "https://www.opendota.com/assets/images/dota2/rank_icons/rank_star_2.png"
            return obj;

        case 13:
            obj.nome = "Herald[3]";
            obj.image = medal(1);
            obj.star = "https://www.opendota.com/assets/images/dota2/rank_icons/rank_star_3.png"
            return obj;

        case 14:
            obj.nome = "Herald[4]";
            obj.image = medal(1);
            obj.star = "https://www.opendota.com/assets/images/dota2/rank_icons/rank_star_4.png"
            return obj;

        case 15:
            obj.nome = "Herald[5]";
            obj.image = medal(1);
            obj.star = "https://www.opendota.com/assets/images/dota2/rank_icons/rank_star_5.png"
            return obj;

        case 21:
            obj.nome = "Guardian[1]";
            obj.image = medal(2);
            obj.star = "https://www.opendota.com/assets/images/dota2/rank_icons/rank_star_1.png"
            return obj;

        case 22:
            obj.nome = "Guardian[2]";
            obj.image = medal(2);
            obj.star = "https://www.opendota.com/assets/images/dota2/rank_icons/rank_star_2.png"
            return obj;

        case 23:
            obj.nome = "Guardian[3]";
            obj.image = medal(2);
            obj.star = "https://www.opendota.com/assets/images/dota2/rank_icons/rank_star_3.png"
            return obj;

        case 24:
            obj.nome = "Guardian[4]";
            obj.image = medal(2);
            obj.star = "https://www.opendota.com/assets/images/dota2/rank_icons/rank_star_4.png"
            return obj;

        case 25:
            obj.nome = "Guardian[5]";
            obj.image = medal(2);
            obj.star = "https://www.opendota.com/assets/images/dota2/rank_icons/rank_star_5.png"
            return obj;

        case 31:
            obj.nome = "Crusader[1]";
            obj.image = medal(3);
            obj.star = "https://www.opendota.com/assets/images/dota2/rank_icons/rank_star_1.png"
            return obj;

        case 32:
            obj.nome = "Crusader[2]";
            obj.image = medal(3);
            obj.star = "https://www.opendota.com/assets/images/dota2/rank_icons/rank_star_2.png"
            return obj;

        case 33:
            obj.nome = "Crusader[3]";
            obj.image = medal(3);
            obj.star = "https://www.opendota.com/assets/images/dota2/rank_icons/rank_star_3.png"
            return obj;

        case 34:
            obj.nome = "Crusader[4]";
            obj.image = medal(3);
            obj.star = "https://www.opendota.com/assets/images/dota2/rank_icons/rank_star_4.png"
            return obj;

        case 35:
            obj.nome = "Crusader[5]";
            obj.image = medal(3);
            obj.star = "https://www.opendota.com/assets/images/dota2/rank_icons/rank_star_5.png"
            return obj;

        case 41:
            obj.nome = "Archon[1]";
            obj.image = medal(4);
            obj.star = "https://www.opendota.com/assets/images/dota2/rank_icons/rank_star_1.png"
            return obj;

        case 42:
            obj.nome = "Archon[2]";
            obj.image = medal(4);
            obj.star = "https://www.opendota.com/assets/images/dota2/rank_icons/rank_star_2.png"
            return obj;

        case 43:
            obj.nome = "Archon[3]";
            obj.image = medal(4);
            obj.star = "https://www.opendota.com/assets/images/dota2/rank_icons/rank_star_3.png"
            return obj;

        case 44:
            obj.nome = "Archon[4]";
            obj.image = medal(4);
            obj.star = "https://www.opendota.com/assets/images/dota2/rank_icons/rank_star_4.png"
            return obj;

        case 45:
            obj.nome = "Archon[5]";
            obj.image = medal(4);
            obj.star = "https://www.opendota.com/assets/images/dota2/rank_icons/rank_star_5.png"
            return obj;

        case 51:
            obj.nome = "Legend[1]";
            obj.image = medal(5);
            obj.star = "https://www.opendota.com/assets/images/dota2/rank_icons/rank_star_1.png"
            return obj;

        case 52:
            obj.nome = "Legend[2]";
            obj.image = medal(5);
            obj.star = "https://www.opendota.com/assets/images/dota2/rank_icons/rank_star_2.png"
            return obj;

        case 53:
            obj.nome = "Legend[3]";
            obj.image = medal(5);
            obj.star = "https://www.opendota.com/assets/images/dota2/rank_icons/rank_star_3.png"
            return obj;

        case 54:
            obj.nome = "Legend[4]";
            obj.image = medal(5);
            obj.star = "https://www.opendota.com/assets/images/dota2/rank_icons/rank_star_4.png"
            return obj;

        case 55:
            obj.nome = "Legend[5]";
            obj.image = medal(5);
            obj.star = "https://www.opendota.com/assets/images/dota2/rank_icons/rank_star_5.png"
            return obj;

        case 61:
            obj.nome = "Ancient[1]";
            obj.image = medal(6);
            obj.star = "https://www.opendota.com/assets/images/dota2/rank_icons/rank_star_1.png"
            return obj;

        case 61:
            obj.nome = "Ancient[2]";
            obj.image = medal(6);
            obj.star = "https://www.opendota.com/assets/images/dota2/rank_icons/rank_star_2.png"
            return obj;

        case 61:
            obj.nome = "Ancient[3]";
            obj.image = medal(6);
            obj.star = "https://www.opendota.com/assets/images/dota2/rank_icons/rank_star_3.png"
            return obj;

        case 61:
            obj.nome = "Ancient[4]";
            obj.image = medal(6);
            obj.star = "https://www.opendota.com/assets/images/dota2/rank_icons/rank_star_4.png"
            return obj;

        case 61:
            obj.nome = "Ancient[5]";
            obj.image = medal(6);
            obj.star = "https://www.opendota.com/assets/images/dota2/rank_icons/rank_star_5.png"
            return obj;

        case 71:
            obj.nome = "Divine[1]"
            obj.image = medal(7);
            obj.star = "https://www.opendota.com/assets/images/dota2/rank_icons/rank_star_1.png"
            return obj;

        case 72:
            obj.nome = "Divine[2]"
            obj.image = medal(7);
            obj.star = "https://www.opendota.com/assets/images/dota2/rank_icons/rank_star_2.png"
            return obj;

        case 73:
            obj.nome = "Divine[3]"
            obj.image = medal(7);
            obj.star = "https://www.opendota.com/assets/images/dota2/rank_icons/rank_star_3.png"
            return obj;

        case 74:
            obj.nome = "Divine[4]"
            obj.image = medal(7);
            obj.star = "https://www.opendota.com/assets/images/dota2/rank_icons/rank_star_4.png"
            return obj;

        case 75:
            obj.nome = "Divine[5]"
            obj.image = medal(7);
            obj.star = "https://www.opendota.com/assets/images/dota2/rank_icons/rank_star_5.png"
            return obj;

        case 81:
            obj.nome = "Immortal"
            obj.image = medal(8);
            obj.star = "https://www.opendota.com/assets/images/dota2/rank_icons/rank_star_1.png"
            return obj;
                        
        case 82:
            obj.nome = "Immortal"
            obj.image = medal(8);
            obj.star = "https://www.opendota.com/assets/images/dota2/rank_icons/rank_star_2.png"
            return obj;
                        
        case 83:
            obj.nome = "Immortal"
            obj.image = medal(8);
            obj.star = "https://www.opendota.com/assets/images/dota2/rank_icons/rank_star_3.png"
            return obj;
                        
        case 84:
            obj.nome = "Immortal"
            obj.image = medal(8);
            obj.star = "https://www.opendota.com/assets/images/dota2/rank_icons/rank_star_4.png"
            return obj;
                        
        case 85:
            obj.nome = "Immortal"
            obj.image = medal(8);
            obj.star = "https://www.opendota.com/assets/images/dota2/rank_icons/rank_star_5.png"
            return obj;

        default:
            return "Unkown";
    }
}
export default rankTier;