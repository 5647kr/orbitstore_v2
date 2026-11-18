interface FilterItemProps {
  id: string;
  title: string;
}

interface FilterProducts {
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

interface Products {
  id: string;
  title: string;
  aperture: number;
  focalLength: string;
  price: number;
  category: string;
  brand: string;
  amount: number;
  img: string;
}

interface Product extends Products {
  created_at: string;
  apertureRatio: string;
  tubeWeight: number;
  mountWeight: number;
  goto: string;
  desc: string;
  popular: number;
  portability: number;
  suitability: { id: string; title: string; value: number }[];
  recommended: string;
  desc_jsonb: { title: string; content: string }[];
  weight: { tubeWeight: number; mountWeight: number };
}
