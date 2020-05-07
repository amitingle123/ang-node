export interface State {
    code: string;
    name: string;
  }

  export interface District {
      district: string,
      notes: string,
      active: number,
      confirmed: number,
      deceased: number,
      recovered: number,
      delta: Deltas
    
  }

  export interface Deltas {
    confirmed: number,
    deceased: number,
    recovered: number
  }