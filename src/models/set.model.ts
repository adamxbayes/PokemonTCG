export class CardSet {
    public code: string;
    public expandedLegal: boolean;
    public logoUrl: string;
    public name: string;
    public ptcgoCode: string;
    public releaseDate: string;
    public series: string;
    public standardLegal: boolean;
    public symbolUrl: string;
    public totalCards: number;
    public updatedAt: string;

    constructor(init?: Partial<CardSet>){
        Object.assign(this, init);
    }
}