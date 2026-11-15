interface Events {
  id: string;
  title: string;
  desc: string;
  img: string;
  startDate: string;
  endDate: string;
  category: string;
}

interface Event extends Events {
  created_at: string;
  participate: Participate[];
  rewards: Rewards[];
  notes: Notes[];
}

interface Participate {
  id: number;
  title: string;
  desc: string;
}

interface Rewards {
  id: number;
  title: string;
  desc: string;
}

interface Notes {
  id: number;
  desc: string;
}
