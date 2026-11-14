interface Faq {
  id: string;
  created_at: string;
  title: string;
  desc: string;
  category: string;
}

interface Inquiry {
  id: string;
  type: string;
  orderId?: string;
  name: string;
  email: string;
  title: string;
  desc: string;
}

interface Guides {
  id: string;
  title: string;
}

interface Guide extends Guides {
  created_at: string;
  desc: string;
  img: string;
  guideSteps: GuideSteps[];
  readingTime: string;
  keyword: string;
  finalCheckList: {
    id: string;
    check: string;
  }[];
  nextGuide: {
    id: string;
    title: string;
  };
}

interface GuideSteps {
  id: string;
  desc: string;
  title: string;
  checkList: {
    id: string;
    checkPoint: string;
  }[];
}
