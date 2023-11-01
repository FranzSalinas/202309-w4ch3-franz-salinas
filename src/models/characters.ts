export interface Character {
  isAlive: boolean;
  message: string;
  name: string;
  family: string;
  age: number;
  serveLevel: number;
  category: King | Squire | Adviser | Fighter;
}

export interface Adviser {
  adviseTo: Fighter;
}

export interface King {
  reingYears: number;
}

export interface Fighter {
  weapon: string;
  skillevel: number;
}

export interface Squire {
  serverLevel: number;
  servesTo: Fighter;
}
