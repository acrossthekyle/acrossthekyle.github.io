import { renderHook, act } from '@testing-library/react';

import { useUnits } from './useUnits';

describe('hooks useUnits', () => {
  beforeEach(() => {
    window.localStorage.clear();

    jest.clearAllMocks();
  });

  it('initializes with "imperial" and correct labels by default', () => {
    const { result } = renderHook(() => useUnits());

    expect(result.current.units).toBe('imperial');
    expect(result.current.labels.length.macro).toBe('miles');
    expect(result.current.labels.weight.macro).toBe('lbs');
  });

  it('initializes with "metric" if stored in localStorage', () => {
    window.localStorage.setItem('units', 'metric');

    const { result } = renderHook(() => useUnits());

    expect(result.current.units).toBe('metric');
    expect(result.current.labels.length.macro).toBe('kilometers');
    expect(result.current.labels.weight.macro).toBe('kgs');
  });

  it('onToggleUnits switches from imperial to metric', () => {
    const { result } = renderHook(() => useUnits());

    act(() => {
      result.current.onToggleUnits();
    });

    expect(result.current.units).toBe('metric');
    expect(result.current.labels.length.micro).toBe('m');
    expect(window.localStorage.getItem('units')).toBe('metric');
  });

  it('onToggleUnits switches from metric back to imperial', () => {
    window.localStorage.setItem('units', 'metric');

    const { result } = renderHook(() => useUnits());

    act(() => {
      result.current.onToggleUnits();
    });

    expect(result.current.units).toBe('imperial');
    expect(result.current.labels.length.micro).toBe('ft');
    expect(window.localStorage.getItem('units')).toBe('imperial');
  });

  it('returns the correct micro units for weight', () => {
    const { result } = renderHook(() => useUnits());

    expect(result.current.labels.weight.micro).toBe('oz');

    act(() => {
      result.current.onToggleUnits();
    });

    expect(result.current.labels.weight.micro).toBe('g');
  });
});
