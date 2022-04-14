import styled, {keyframes} from 'styled-components';

const rotate = itemOrder => keyframes`
  from{
    transform: translate(300px) rotate(${itemOrder * 45}deg);  
  }
  to {
    transform: translate(300px) rotate(${itemOrder * 45 + 360}deg);
  }
`;

const reverseRotate = itemOrder => keyframes`
  from{
    transform: rotate(${itemOrder * -45}deg);  
  }
  to {
    transform: rotate(${itemOrder * -45 - 360}deg);
  }
`;

const throb = keyframes`
  0% { width: 120px;}
  50% { width: 100px;}
  100% { width: 120px;}
`;

const iconthrob = keyframes`
  0% { width: 40px;}
  50% { width: 33.33px;}
  100% { width: 40px;}
`

export const PageContainer = styled.div`
  display: flex;
  align-items: center;
  min-width: 100vw;
  min-height: 100vh;
  justify-content: center;
  font-family: sans-serif;
`

export const CenterImagesContainer = styled.div`
  position: absolute;
  width: 181px;
  height: 181px;
`;

export const CenterImage = styled.img`
  position: absolute;
  width: 181px;
  aspect-ratio: 1 / 1;
  ${
    p => p.hoverhide ? `
    transition: opacity 500ms ease;
    &:hover{
        opacity: 0;
    }`
    :''
  }
`;

export const RevolvingList = styled.ul`
    list-style: none;
  position: absolute;
  transform: translate(-60px, -60px);
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0;
  margin-inline-end: 0;
  padding-inline-start: 0;
  &:hover{
    li{
      animation-play-state: paused, running;
      *{
        animation-play-state: paused;
      }
    }
  }
`;

export const ListItem = styled.li`
  background-color: ${p => p.color ? p.color : '#CCCCCC'};
  width: 120px;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  position: absolute;
  display: grid;
  place-items: center;
  text-align: center;
  transform-origin: -240px;
  animation: ${p => rotate(p.itemOrder)} 60s linear infinite, ${throb} 2s ease-in-out infinite;
  transition: background-color 200ms ease-in-out;
  &:hover{
    background-color: ${p => p.darkColor ? p.darkColor : '#AAAAAA'};
    animation-play-state: paused !important;
    p{
      opacity: 1;
      animation-play-state: paused !important;
    }
    img{
      opacity: 0;
      animation-play-state: paused !important;
    }
  }
  
  & *{
    transform: ${p => p.itemOrder ? `rotate(${p.itemOrder * -45}deg)` : ''};
    animation: ${p => reverseRotate(p.itemOrder)} 60s linear infinite;
  }
  
  & img{
    animation: ${p => reverseRotate(p.itemOrder)} 60s linear infinite, ${iconthrob} 2s ease-in-out infinite;
  }
`;

export const ListImage = styled.img`
  position: absolute;
  opacity: 1;
  transition: opacity 200ms ease-in-out;
`

export const ListText = styled.p`
  position: absolute;
  color: white;
  font-size: 14px;
  width: 80px;
  font-weight: 500;
  opacity: 0;
  transition: opacity 200ms ease-in-out;
`
