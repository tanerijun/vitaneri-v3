export function toggleGiscusTheme() {
  if (document.querySelector("iframe.giscus-frame")) {
    const theme =
      localStorage.getItem("theme") === "light"
        ? "light"
        : "https://vitaneri.com/css/giscus_custom.css";
    const message = {
      setConfig: {
        theme,
      },
    };
    const iframe = document.querySelector(
      "iframe.giscus-frame"
    ) as HTMLIFrameElement;
    iframe?.contentWindow?.postMessage(
      { giscus: message },
      "https://giscus.app"
    );
  }
}
