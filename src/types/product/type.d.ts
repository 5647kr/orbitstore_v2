interface FilterItemProps {
  id: string;
  title: string;
}

interface FilterState {
  sort: "recent" | "highPrice" | "lowPrice" | "popular";
  price: string;
  aperture: string;
  category: {
    굴절망원경: boolean;
    반사망원경: boolean;
    돕소니안: boolean;
  };
  brand: {
    orion: boolean;
    celestron: boolean;
    "sky-watcher": boolean;
    omegon: boolean;
  };
  option: {
    support: boolean;
    haveStuck: boolean;
  };
}

interface Product {
  id: string;
  created_at: string;
  title: string;
  aperture: number;
  apertureRatio: string;
  focalLength: string;
  tubeWeight: number;
  mountWeight: number;
  goto: string;
  price: number;
  category: string;
  brand: string;
  amount: number;
  img: string;
  desc: string;
  popular: number;
}
