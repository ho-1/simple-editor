import { atom } from 'recoil'

export const editorThemeState = atom({
  key: 'EditorThemeState',
  default: 'light' as string,
});