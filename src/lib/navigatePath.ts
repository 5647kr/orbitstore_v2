export function navigatePath(path: string) {
  switch (path) {
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
