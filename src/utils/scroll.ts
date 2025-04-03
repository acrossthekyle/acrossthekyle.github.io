export function scrollToTop() {
  const content = document.getElementById('view-anchor');

  if (content) {
    content.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });

    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
}

export function scrollToElement(id: string) {
  const content = document.getElementById(id);

  if (content) {
    content.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}
