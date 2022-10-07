export function toggleUtterancesTheme() {
  if (document.querySelector(".utterances-frame")) {
    const theme =
      localStorage.getItem("theme") === "light"
        ? "github-light"
        : "github-dark";
    const message = {
      type: "set-theme",
      theme,
    };
    const iframe = document.querySelector(
      ".utterances-frame"
    ) as HTMLIFrameElement;
    iframe?.contentWindow?.postMessage(message, "https://utteranc.es");
  }
}
