import { renderHook, act } from '@testing-library/react';

import { useTheme } from './useTheme';

describe('hooks useTheme', () => {
  beforeEach(() => {
    window.localStorage.clear();

    document.documentElement.removeAttribute('data-theme');

    jest.clearAllMocks();
  });

  it('initializes with "light" by default', () => {
    const { result } = renderHook(() => useTheme());

    expect(result.current.theme).toBe('light');
  });

  it('initializes with value from localStorage if present', () => {
    window.localStorage.setItem('theme', 'dark');

    const { result } = renderHook(() => useTheme());

    expect(result.current.theme).toBe('dark');
  });

  it('onToggleTheme switches from light to dark', () => {
    const { result } = renderHook(() => useTheme());

    act(() => {
      result.current.onToggleTheme();
    });

    expect(result.current.theme).toBe('dark');
    expect(window.localStorage.getItem('theme')).toBe('dark');
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
  });

  it('onToggleTheme switches from dark to light', () => {
    window.localStorage.setItem('theme', 'dark');

    const { result } = renderHook(() => useTheme());

    act(() => {
      result.current.onToggleTheme();
    });

    expect(result.current.theme).toBe('light');
    expect(window.localStorage.getItem('theme')).toBe('light');
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');
  });

  it('updates the <html> element data-theme attribute', () => {
    const { result } = renderHook(() => useTheme());

    act(() => {
      result.current.onToggleTheme();
    });

    expect(document.querySelector('html').getAttribute('data-theme')).toBe('dark');
  });
});
