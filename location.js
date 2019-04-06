class Location
{
    constructor(name, color, address)
    {
        this.name = name;
		this.color = color;
        this.address = address;
    }
}


//////////////////////////////// KNOWN LOCATIONS //////////////////////////////

var locations = new Map();

locations.set("after", new Location("L\'After", 'violet', "https://www.google.fr/maps/place/L'After/@45.2031457,5.7669453,15z/data=!4m2!3m1!1s0x0:0x78e53140e3a09892?ved=2ahUKEwj2rNup2O3eAhUBC8AKHYDWCDgQ_BIwCnoECAUQCA"));
locations.set("bowling", new Location("Bowling Echirolles", 'pink', "https://www.google.fr/maps/place/BowlCenter+%C3%89chirolles/@45.1507527,5.7147063,17z/data=!3m1!4b1!4m5!3m4!1s0x478a8b4e8abd5aa1:0x5565c01cfe4f18f5!8m2!3d45.1507527!4d5.716895"));
locations.set("da_vinci", new Location("Da Vinci Club", 'blue', "http://maps.google.com/maps?f=q&source=s_q&hl=en&geocode=&q=saint+martin+d%27heres+28+rue+barnave&aq=&sll=45.155896,5.712891&sspn=0.649803,1.730347&ie=UTF8&hq=&hnear=28+Rue+Barnave,+38400+Saint-Martin-d%27H%C3%A8res,+Is%C3%A8re,+Rh%C3%B4ne-Alpes,+France&t=h&z=16"));
locations.set("la_belle", new Location("La Belle Electrique", 'white', "https://www.google.fr/maps/place/La+Belle+Electrique/@45.1872341,5.7041817,15z/data=!4m2!3m1!1s0x0:0x16952b4feb50ba3b?ved=2ahUKEwjA6aCdldnfAhVrxoUKHa8nCAUQ_BIwDnoECAIQCA" ));
locations.set("shag", new Location("Shag Café", 'orange', "http://maps.google.fr/maps?f=q&source=s_q&hl=fr&geocode=&q=shag+caf%C3%A9+Seyssinet+Pariset&sll=45.292279,5.888672&sspn=1.257838,3.460693&gl=fr&ie=UTF8&hq=shag+caf%C3%A9&hnear=Seyssinet-Pariset,+Is%C3%A8re,+Rh%C3%B4ne-Alpes&z=15"));
locations.set("salsa_gre", new Location("Salsa Grenoble", 'green', "https://www.google.com/maps/place/Centre+de+Danse+Salsa+Grenoble/@45.1862133,5.7031764,17z/data=!3m1!4b1!4m5!3m4!1s0x478af37ca4da4def:0x5efd9931cd2656b!8m2!3d45.1862095!4d5.7053651?hl=fr" ));
locations.set("upper_place", new Location("Upper Place", 'red', "https://www.google.com/maps/place/UPPER+PLACE/@45.1858658,5.7286903,17z/data=!3m1!4b1!4m5!3m4!1s0x478af48d23691479:0xaddcede2fac0decb!8m2!3d45.185862!4d5.730879?hl=fr" ));

