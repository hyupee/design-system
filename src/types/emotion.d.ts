import '@emotion/react';

import { Theme as AppTheme } from './../core/theme';

declare module '@emotion/react' {
  export interface Theme extends AppTheme {}
}
