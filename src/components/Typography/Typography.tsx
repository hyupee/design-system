import { PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Typography as TypographyType, TypographySize, TypographyWeight } from '../../core/typography/typography'

interface Props {
  as?: React.ElementType;
  size: TypographySize;
  weight: TypographyWeight;
}

export const Typography = ({ children, as, size, weight }: PropsWithChildren<Props>) => {
  return <Text as={as} size={size} weight={weight}>{children}</Text>
};

const Text = styled.span<Props>`
  ${({ theme, size, weight }) => {
    const props: TypographyType = theme.typography?.[size]?.[weight] ?? {};

    return css`
      font-size: ${props.fontSize};
      font-weight: ${props.fontWeight};
      line-height: ${props.lineHeight};
      color: #000;
    `;
  }}
`;
