type OpenLinkInNewWindow = {
  url: string;
  title: string;
  w: number;
  h: number;
};

const openLinkInNewWindow = ({ url, title, w, h }: OpenLinkInNewWindow) => {
  // Fixes dual-screen position                             Most browsers      Firefox
  const dualScreenLeft =
    window.screenLeft !== undefined ? window.screenLeft : window.screenX;
  const dualScreenTop =
    window.screenTop !== undefined ? window.screenTop : window.screenY;

  const width = window.innerWidth
    ? window.innerWidth
    : document.documentElement.clientWidth
    ? document.documentElement.clientWidth
    : window.screen.width;
  const height = window.innerHeight
    ? window.innerHeight
    : document.documentElement.clientHeight
    ? document.documentElement.clientHeight
    : window.screen.height;

  const systemZoom = width / window.screen.availWidth;
  const left = (width - w) / 2 / systemZoom + dualScreenLeft;
  const top = (height - h) / 2 / systemZoom + dualScreenTop;
  const newWindow = window.open(
    url,
    title,
    `
        scrollbars=yes,
        width=${w / systemZoom}, 
        height=${h / systemZoom}, 
        top=${top}, 
        left=${left}
        `
  );

  if (window.focus as any) (newWindow as any).focus();
};

export default openLinkInNewWindow;
