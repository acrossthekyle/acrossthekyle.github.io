'use client';

export function useTheme() {
  const onToggleTheme = () => {
    let theme = 'light';

    if (localStorage.getItem('theme')) {
      theme = localStorage.getItem('theme') || 'light';
    }

    const value = theme === 'dark' ? 'light' : 'dark';

    localStorage.setItem('theme', value);

    const element = document.querySelector('html');

    if (element) {
      element.setAttribute('data-theme', value);
    }
  };

  return {
    onToggleTheme,
  }
}
