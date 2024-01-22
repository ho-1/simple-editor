'use client';

import { useState } from 'react';
import styled from 'styled-components';
import { useTheme } from 'next-themes'
import { useRecoilState } from 'recoil'
import { editorThemeState } from '@/recoil/editor-theme-atom'

interface ThemeDialogProps {}

export const ThemeModal = ({}: ThemeDialogProps) => {
  const { setTheme } = useTheme()
  const [showModal, setShowModal] = useState(false);
  const [theme, setThemeState] = useRecoilState(editorThemeState);

  const handleDialog = () => {
    setShowModal(!showModal);
  };

  const onClick = (value: 'light' | 'dark') => {
    setTheme(value);

    if (value === 'dark') {
      setThemeState('vs-dark');
      return;
    }

    setThemeState(value);
  }

  return (
    <>
      <button onClick={handleDialog}>Change Theme</button>

      {showModal && (
        <DialogWrapper>
          <Dialog>
            <DialogHeader>
              <h1>테마</h1>
              <button onClick={handleDialog}>Close</button>
            </DialogHeader>

            <DialogContent>
              <button onClick={() => onClick('light')}>Light</button>
              <button onClick={() => onClick('dark')}>Dark</button>
            </DialogContent>
          </Dialog>
        </DialogWrapper>
      )}
    </>
  );
}

const DialogWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
`

const Dialog = styled.div`
    padding: 16px;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 300px;
    height: 200px;
    background-color: #fff;
    transform: translate(-50%, -50%);
    border-radius: 8px;
`

const DialogHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: black;
`

const DialogContent = styled.div`
    padding: 40px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    
    button {
        padding: 8px 16px;
        border-radius: 8px;
        cursor: pointer;
        border: 1px solid #000;
        color: black;
        background-color: #fff;

        &:hover {
            background-color: #000;
            color: #fff;
        }
    }
`