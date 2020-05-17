import styled from 'styled-components';
import { Modal } from 'react-bootstrap';

export const CustomModal = styled(Modal.Dialog)`
  .modal-content {
    border-radius: 0;
    background-color: gray;

    .modal-title,
    p,
    .close {
      color: white;
    }

    .close {
      padding-right: 40px;
    }

    .btn-secondary {
      background-color: white;
      color: gray;
    }
  }
`;
