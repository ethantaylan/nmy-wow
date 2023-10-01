export interface PlayerResponse {
  name: string;
  role: string;
  spec: string;
  is_in_roster: boolean;
  discord: string;
  battle_net: string;
}

export class Player {
  role: string;
  name: string;
  spec: string;
  isInRoster: boolean;
  discord: string;
  battleNet: string;

  constructor(response: PlayerResponse) {
    this.name = response.name;
    this.role = response.role;
    this.spec = response.spec;
    this.isInRoster = response.is_in_roster;
    this.discord = response.discord;
    this.battleNet = response.battle_net;
  }
}
