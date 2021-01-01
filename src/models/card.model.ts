export class Card {
    public id: string;
    public name: string;
    public nationalPokemonNumber: number;
    public imageUrl: string;
    public imageUrlHiRes: string;
    public types: string[];
    public supertype: string;
    public subtype: string;
    public evolvesFrom: string;
    public hp: string;
    public retreatCost: string[];
    public number: string;
    public artist: string;
    public rarity: string;
    public series: string;
    public ability: Ability;
    public set: string;
    public setCode: string;
    public attacks: Attack[];
    public convertedRetreatCost: number;
    public weaknesses: Weakness[];

    constructor(init?: Partial<Card>){
        Object.assign(this, init);
    }
}

export class Ability {
    public name: string;
    public text: string;
    public type: string;
    constructor(init?: Partial<Ability>){
        Object.assign(this,init);
    }
}

export class Attack {
    public cost: string[];
    public damage: string;
    public name: string;
    public text: string; 
    constructor(init?: Partial<Attack>){
        Object.assign(this,init);
    }
}


export class Weakness {
    public type: string;
    public value: string;

    constructor(init?: Partial<Weakness>){
        Object.assign(this, init);
    }
}

