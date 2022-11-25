import { Typography, TypographyWeight } from './../../core/typography/typography';
import { createTypographyToken } from './createTypographyToken';

interface CreateTypographyParams {
  fontSize: number;
  lineHeight: number;
}

export const createTypography = ({ fontSize, lineHeight }: CreateTypographyParams): Record<TypographyWeight, Typography> => {
  return {
    light: createTypographyToken({
      fontSize,
      fontWeight: 'light',
      lineHeight,
    }),
    regular: createTypographyToken({
      fontSize,
      fontWeight: 'normal',
      lineHeight,
    }),
    bold: createTypographyToken({
      fontSize,
      fontWeight: 'bold',
      lineHeight,
    }),
    semiBold: createTypographyToken({
      fontSize,
      fontWeight: 600,
      lineHeight,
    }),
  }
};
