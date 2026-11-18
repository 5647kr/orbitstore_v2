export function navigatePath(path: string, dynamic?: string) {
  switch (path) {
    // product
    case "/product":
      return [{ path: "/product", title: "망원경" }];
    case "/product/":
      return [
        { path: "/product", title: "망원경" },
        { path, title: dynamic ?? "제품 상세" },
      ];

    // event
    case "/event":
      return [{ path: "/event", title: "이벤트" }];

    // support
    case "/support":
      return [{ path: "/support", title: "고객센터" }];
    case "/support/faq":
      return [
        { path: "/support", title: "고객센터" },
        { path: "/support/faq", title: "FAQ" },
      ];
    case "/support/inquiry":
      return [
        { path: "/support", title: "고객센터" },
        { path: "/support/inquiry", title: "1:1 문의" },
      ];
    case "/support/inquiry/success":
      return [
        { path: "/support", title: "고객센터" },
        { path: "/support/inquiry", title: "1:1 문의" },
      ];
  }
}
