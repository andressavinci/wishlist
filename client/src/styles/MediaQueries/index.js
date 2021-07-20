import { css } from 'styled-components/macro';
import theme from 'styles/Themes';

const {
  main: { sizes },
} = theme;

// https://tobbelindstrom.com/blog/how-to-create-a-breakpoint-mixin-with-styled-components/
const MediaQueries = Object.keys(sizes).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});

export default MediaQueries;
