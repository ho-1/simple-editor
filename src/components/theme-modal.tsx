'use client';

import React, { useState } from 'react';
import styled from 'styled-components';

interface ThemeDialogProps {}

export const ThemeModal = ({}: ThemeDialogProps) => {
  const [showModal, setShowModal] = useState(false);

  const handleDialog = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <button onClick={handleDialog}>Click Me</button>
      {showModal && (
        <Dialog>
          버튼
        </Dialog>
      )}
    </>
  );
}

const Dialog = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .7);
    z-index: 1000;
`