import styled from 'styled-components';
import { Container, ListGroupItem } from 'reactstrap';
import Toggle from 'react-toggle';

export const TodoListContainer = styled(Container)`
  height: 78vh;
  min-height: 20rem;
`;

export const FilterContainer = styled.div`
  text-align: right;
`;

export const FilterToggle = styled(Toggle)`
  vertical-align: middle;
`;

export const TodoItem = styled(ListGroupItem)`
  margin-bottom: 0.25rem;
`;

export const TitleCol = styled.span`
  float: left;
`;

export const CheckCol = styled.span`
  float: right;

  svg {
    font-size: 1.5rem;
  }
`;
