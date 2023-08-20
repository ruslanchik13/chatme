import {css} from "styled-components";

export interface IBorder {
  border?: string,
  bt?: string,
  bb?: string,
  bl?: string,
  br?: string
}

export const Border = css<IBorder>`
  border-top: ${({bt}) => bt};
  border-bottom: ${({bb}) => bb};
  border-left: ${({bl}) => bl};
  border-right: ${({br}) => br};
  border: ${({border}) => border};
`