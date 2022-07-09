import ReactPaginate from 'react-paginate';
import styled from 'styled-components';

const Pagination = styled(ReactPaginate)`
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;

  li {
    list-style: none;
    color: yellow;
    margin: 0 4px;

    a {
      display: inline-block;
      padding: 8px 16px;
      border-radius: 4px;

      text-decoration: none;
      background-color: black;
    }

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }

    &.selected a {
      background-color: #6862622b;
    }

    &.previous,
    &.next {
      display: none;
    }
  }
`;

export default Pagination;
