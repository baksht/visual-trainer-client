import styled from 'styled-components';

import { hasValue } from 'src/shared/utils';

export const Image = styled.img<{ imageSize?: number; isDragging?: boolean }>`
  width: ${({ imageSize }) => (hasValue(imageSize) ? `${imageSize}px` : '100%')};
  height: ${({ imageSize }) => (hasValue(imageSize) ? `${imageSize}px` : '100%')};
  opacity: ${({ isDragging }) => (isDragging ? '0.3' : '1')};
  cursor: grab;
`;
