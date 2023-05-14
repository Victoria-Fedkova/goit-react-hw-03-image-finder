import styled from '@emotion/styled';

export const GalleryItem = styled.li`
  cursor: pointer;
  transition: all 250ms linear;
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);

  &:hover {
    transform: scale(1.02);
    cursor: zoom-in;
  }
`;

export const GalleryImg = styled.img`
  display: block;
  max-width: 100%;
  height: 100%;
  object-fit: cover;
`;
