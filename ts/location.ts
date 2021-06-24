class LocationParams
{
    name: string;
    color: string;
    address: string;

    constructor(name: string, color: string, address: string)
    {
        this.name = name;
		this.color = color;
        this.address = address;
    }
}


//////////////////////////////// KNOWN LOCATIONS //////////////////////////////


let locations: Map<string, LocationParams> = new Map<string, LocationParams>();

locations.set("after", new LocationParams("L\'After Grimaldi", 'violet', "https://www.google.fr/maps/place/L'After/@45.2031457,5.7669453,15z/data=!4m2!3m1!1s0x0:0x78e53140e3a09892?ved=2ahUKEwj2rNup2O3eAhUBC8AKHYDWCDgQ_BIwCnoECAUQCA"));
locations.set("bowling", new LocationParams("Bowling Echirolles", 'pink', "https://www.google.fr/maps/place/BowlCenter+%C3%89chirolles/@45.1507527,5.7147063,17z/data=!3m1!4b1!4m5!3m4!1s0x478a8b4e8abd5aa1:0x5565c01cfe4f18f5!8m2!3d45.1507527!4d5.716895"));
locations.set("da_vinci", new LocationParams("Da Vinci Club", 'blue', "https://www.google.com/maps/place/Restaurant+DaVinci+Club/@45.1880528,5.7600144,15z/data=!4m5!3m4!1s0x0:0x543331fa56ea2745!8m2!3d45.1880528!4d5.7600144"));
locations.set("escapade", new LocationParams("Escapade Voiron", 'red', "https://www.google.com/maps/place/L'Escapade/@45.360316,5.5696924,15z/data=!4m5!3m4!1s0x0:0x5e56499dd9c0dfe5!8m2!3d45.360316!4d5.5696924" ));
locations.set("garric", new LocationParams("Garric Danse Voiron", 'indigo', "https://www.google.com/maps/place/Garric+Danse+Club/@45.3519902,5.591108,15z/data=!4m5!3m4!1s0x0:0x4e9a570066ee5f5b!8m2!3d45.3519902!4d5.591108"));
locations.set("gianonne", new LocationParams("Giannone", 'pink', "https://www.google.fr/maps/place/%C3%89cole+de+Danse+Enfants+Grenoble+:+%C3%89cole+de+Danse+en+Couple+Giannone+Grenoble+St+Martin+d'h%C3%A8res/@45.1761633,5.7604596,15z/data=!4m5!3m4!1s0x0:0xcc09e5a5d79b5dfc!8m2!3d45.1761633!4d5.7604596"));
locations.set("la_belle", new LocationParams("La Belle Electrique", 'white', "https://www.google.fr/maps/place/La+Belle+Electrique/@45.1872341,5.7041817,15z/data=!4m2!3m1!1s0x0:0x16952b4feb50ba3b?ved=2ahUKEwjA6aCdldnfAhVrxoUKHa8nCAUQ_BIwDnoECAIQCA" ));
locations.set("loco", new LocationParams("Loco Mosquito", 'yellow', "https://www.google.com/maps/place/Loco+Mosquito/@45.1840861,5.7188904,15z/data=!4m2!3m1!1s0x0:0xa3549a8b14fcd9f8?sa=X&ved=2ahUKEwjV5qvxkeHhAhVDa1AKHUOlDRoQ_BIwCnoECBAQCA" ));
locations.set("mambo", new LocationParams("Mambo Rock Chambéry", 'grey', "https://www.google.com/maps/place/Ecole+de+Danse+Mambo-rock+Chamb%C3%A9ry+(Barberaz)/@45.561279,5.947893,15z/data=!4m5!3m4!1s0x0:0x3fcd264c666ad318!8m2!3d45.561279!4d5.947893" ));
locations.set("rectorat", new LocationParams("Rectorat", 'white', "https://www.google.fr/maps/place/Acad%C3%A9mie+de+Grenoble/@45.1883806,5.7348124,17z/data=!3m1!4b1!4m5!3m4!1s0x478af48b41c57d4f:0xac5526f2f5b8313a!8m2!3d45.18844!4d5.7369633"));
locations.set("rives_org", new LocationParams("Rives, Parc de L'Orgère", 'red', "https://www.google.com/maps/place/Salle+Fran%C3%A7ois+Mitterrand/@45.3510526,5.5003206,16z/data=!4m5!3m4!1s0x0:0x6bd39d81eeafe8ca!8m2!3d45.3513065!4d5.5004372"));
locations.set("shag", new LocationParams("Shag Café", 'orange', "http://maps.google.fr/maps?f=q&source=s_q&hl=fr&geocode=&q=shag+caf%C3%A9+Seyssinet+Pariset&sll=45.292279,5.888672&sspn=1.257838,3.460693&gl=fr&ie=UTF8&hq=shag+caf%C3%A9&hnear=Seyssinet-Pariset,+Is%C3%A8re,+Rh%C3%B4ne-Alpes&z=15"));
locations.set("salsa_gre", new LocationParams("Salsa Grenoble", 'green', "https://www.google.com/maps/place/Centre+de+Danse+Salsa+Grenoble/@45.1862133,5.7031764,17z/data=!3m1!4b1!4m5!3m4!1s0x478af37ca4da4def:0x5efd9931cd2656b!8m2!3d45.1862095!4d5.7053651?hl=fr" ));
locations.set("upper_place", new LocationParams("Upper Place", 'red', "https://www.google.com/maps/place/UPPER+PLACE/@45.1858658,5.7286903,17z/data=!3m1!4b1!4m5!3m4!1s0x478af48d23691479:0xaddcede2fac0decb!8m2!3d45.185862!4d5.730879?hl=fr" ));

