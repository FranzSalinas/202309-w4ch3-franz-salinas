export interface Character {
  isAlive: boolean;
  message: string;
  name: string;
  family: string;
  age: number;
  serveLevel: number;
  category: King | Squire | Adviser | Fighter;
}

export interface Adviser extends Character {
  adviseTo: Fighter;
}

export interface King extends Character {
  reingYears: number;
}

export interface Fighter extends Character {
  weapon: string;
  skillevel: number;
}

export interface Squire extends Character {
  serverLevel: number;
  servesTo: Fighter;
}
