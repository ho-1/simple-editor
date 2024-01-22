import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

export type EditorTheme = 'light' | 'vs-dark';

const localStorage = typeof window !== `undefined` ? window.localStorage : null

const { persistAtom } = recoilPersist({
  key: 'recoil-persist',
  storage: localStorage as Storage,
})

export const editorThemeState = atom<EditorTheme>({
  key: 'EditorThemeState',
  default: 'light',
  effects_UNSTABLE: [persistAtom]
});