export class Raid {
  id: number;
  name: string;
  timeStarted: string;
  timeEnded: string;
  numberOfAttendees: number;
  numberOfTanks: number;
  numberOfHealers: number;
  numberOfDps: number;
  numberBossesKilled: number;
  bestItemDropped: string;

  constructor(
  id?: number,
  name?: string,
  timeStarted?: string,
  timeEnded?: string,
  numberOfAttendees?: number,
  numberOfTanks?: number,
  numberOfHealers?: number,
  numberOfDps?: number,
  numberBossesKilled?: number,
  bestItemDropped?: string,
  ){
    this.id=id;
    this.name=name;
    this.timeStarted=timeStarted;
    this.timeEnded=timeEnded;
    this.numberOfAttendees=numberOfAttendees;
    this.numberOfTanks=numberOfTanks;
    this.numberOfHealers=numberOfHealers;
    this.numberOfDps=numberOfDps;
    this.numberBossesKilled=numberBossesKilled;
    this.bestItemDropped=bestItemDropped;
}
}
