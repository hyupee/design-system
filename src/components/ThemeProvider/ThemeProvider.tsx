import { ComponentProps } from 'react';
import { ThemeProvider as EmotionThemeProvider} from '@emotion/react';
import { Theme, theme as baseTheme } from '../../core/theme'

interface Props extends Omit<ComponentProps<typeof EmotionThemeProvider>, 'theme'> {
  theme?: Theme;
};

export const ThemeProvider = ({ theme = baseTheme, ...props }: Props) => {
  return <EmotionThemeProvider theme={baseTheme} {...props} />;
};
