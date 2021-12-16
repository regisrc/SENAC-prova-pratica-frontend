import { colors } from './colors';

export const theme = {
  colors
};

type Theme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}