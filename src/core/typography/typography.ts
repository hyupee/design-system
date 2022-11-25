import { createTypography } from './../../utils/typography/createTypography';

export type TypographySize = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
export type TypographyWeight = 'light' | 'regular' | 'bold' | 'semiBold';
export interface Typography {
  fontSize: string;
  fontWeight: string | number;
  lineHeight: string;
}

export const typography: Record<TypographySize, Record<TypographyWeight, Typography>> =  {
  xxs: createTypography({
    fontSize: 10,
    lineHeight: 12,
  }),
  xs: createTypography({
    fontSize: 12,
    lineHeight: 14,
  }),
  sm: createTypography({
    fontSize: 14,
    lineHeight: 16,
  }),
  md: createTypography({
    fontSize: 16,
    lineHeight: 18,
  }),
  lg: createTypography({
    fontSize: 18,
    lineHeight: 20,
  }),
  xl: createTypography({
    fontSize: 20,
    lineHeight: 22,
  }),
  xxl: createTypography({
    fontSize: 22,
    lineHeight: 24,
  }),
};
