import styled from 'styled-components';

import { LockIcon } from 'src/assets/icons';
import { hasValue } from 'src/shared/utils';
import { staticColors } from 'src/styles/variables';

export const Container = styled.div<{ isLocked?: boolean }>`
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Image = styled.img<{ imageSize?: number; isDragging?: boolean; isLocked?: boolean }>`
  width: ${({ imageSize }) => (hasValue(imageSize) ? `${imageSize}px` : '100%')};
  height: ${({ imageSize }) => (hasValue(imageSize) ? `${imageSize}px` : '100%')};
  opacity: ${({ isDragging }) => (isDragging ? '0.3' : '1')};
  cursor: grab;
  filter: ${({ isLocked }) => (isLocked ? 'blur(20px)' : 'none')};
`;

export const LockImage = styled(LockIcon)<{ isLocked?: boolean }>`
  color: ${staticColors.white};
  position: absolute;
  height: 80%;
  width: 80%;
  display: ${({ isLocked }) => (isLocked ? 'block' : 'none')};
`;
