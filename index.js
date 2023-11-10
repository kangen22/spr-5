class Hero {
    constructor(nickName, lvlHero, factions, race, gender, type) {
        this.nickName = nickName;
        this.lvlHero = lvlHero;
        this.factions = factions;
        this.race = race;
        this.gender = gender;
        this.type = type;
    }
    toString() {
        return `
        nickName is ${this.nickName}, start lvlHero = ${this.lvlHero},
        factions is ${this.factions}, hero gender is ${this.gender}.
        Your main hero class is ${this.type}`;
    }
}


class HeroBuilder {
    #nickName;
    #lvlHero;
    #factions;
    #race;
    #gender;
    #type;
    constructor(nickName) {
        this.#nickName = nickName;
        this.#lvlHero = 0;
        this.#factions = 'Unknown Faction';
        this.#race = 'Unknown Race';
        this.#gender = 'Unknown Gender';
        this.#type = 'Unknown Type';
    }
    setFactions(factions) {
        this.#factions = factions;
        return this;
    }

    setRace(race) {
        this.#race = race;
        return this;
    }

    setGender(gender) {
        this.#gender = gender;
        return this;
    }

    setTypeClass(type) {
        this.#type = type;
        return this;
    }

    build() {
        return new Hero( 
        this.#nickName,
        this.#lvlHero,
        this.#factions,
        this.#race,
        this.#gender,
        this.#type
    );
    }
}

let main = () => {
    const heroes = [
        new HeroBuilder('Kangen22').setFactions('alliance').setRace('gnome').setGender('male').setTypeClass('druid').build(),
        new HeroBuilder('proSun').setFactions('horde').setRace('orc').setGender("female").setTypeClass('warrior').build(),
        new HeroBuilder('dunkanenko').setFactions('alliance').setRace('human').setGender('male').setTypeClass('paladin').build(),
        new HeroBuilder('ArtemViz').setFactions('alliance').build()
    ]; 
    for (const hero of heroes) {
        console.log(hero.toString())
    }
}

main();


