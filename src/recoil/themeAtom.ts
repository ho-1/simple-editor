import { atom } from 'recoil'

export const themeState = atom({
  key: 'ThemeState',
  default: 'light' as string,
});