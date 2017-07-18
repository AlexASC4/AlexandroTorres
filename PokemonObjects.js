//Type,HP,DEF,ATK,Legend
function stats (Name,Type,HP,DEF,ATK,LEGEND){
    this.Name = Name;
    this.Type = Type;
    this.HP = HP;
    this.DEF = DEF;
    this.ATK = ATK;
    this.LEGEND = LEGEND;
}
var Pikachu = new stats ("Pikachu", "Electric", 35, 55, 40, false)
var Lucario = new stats ("Lucario", "Psychic", 70, 70, 110, true)
var Lugia = new stats ("Lugia", "Flying",106, 130, 90, true)
var Garintina = new stats ("Garintina", "Dragon", 150, 120, 100, true)
var Darkrai = new stats ("Darkrai", "Dark", 70, 90, 90, true)
var Steelix = new stats ("Steelix", "Steel", 75, 200, 85, false)

//console.log(Pikachu, Lucario, Lugia, Garintina, Darkrai, Steelix);
    
    for (var i=0; i<;5 i++){
        console.log(Pikachu, Lucario, Lugia, Garintina, Darkrai, Steelix);
    }