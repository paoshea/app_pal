export const isMobileDevice = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
};

export const isIOSDevice = () => {
  return /iPad|iPhone|iPod/.test(navigator.userAgent);
};

export const getViewportHeight = () => {
  // Fix for iOS viewport height issues
  return isIOSDevice()
    ? window.innerHeight
    : document.documentElement.clientHeight;
};

export const preventScrollBounce = (element: HTMLElement) => {
  let startY = 0;

  element.addEventListener('touchstart', (e) => {
    startY = e.touches[0].pageY;
  });

  element.addEventListener('touchmove', (e) => {
    const y = e.touches[0].pageY;
    const scrollTop = element.scrollTop;
    const scrollHeight = element.scrollHeight;
    const clientHeight = element.clientHeight;

    if (scrollTop === 0 && y > startY) {
      e.preventDefault();
    }

    if (scrollTop + clientHeight === scrollHeight && y < startY) {
      e.preventDefault();
    }
  });
};