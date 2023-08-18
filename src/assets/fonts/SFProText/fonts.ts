import {css} from "styled-components";

export const Font = css`
  @font-face {
    font-family: 'SFProText';
    src: local('SFProText'),
    url('SFProText-Regular.ttf') format('ttf');
    font-style: normal;
  }
  
  * {font-family: SFProText, sans-serif}
`
