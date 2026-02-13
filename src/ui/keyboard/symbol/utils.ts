function getPlatform() {
  return window.navigator.platform ||
    window.navigator.userAgent;
};

export function getKeyboardSymbol(value: string) {
  const platform = getPlatform().toLowerCase();

  let map: { [key: string]: { isLetters: boolean; value: string | null; } } = {
    cmdCtrl: {
      isLetters: false,
      value: null,
    },
  };

  if (
    /mac/.test(platform) ||
    ['iphone', 'ipad', 'ipod'].indexOf(platform) >= 0
  ) {
    map = {
      cmdCtrl: {
        isLetters: false,
        value: '⌘',
      },
    };
  }

  if (/win/.test(platform) || /linux/.test(platform)) {
    map = {
      cmdCtrl: {
        isLetters: true,
        value: 'CTRL',
      },
    };
  }

  return map[value];
};
