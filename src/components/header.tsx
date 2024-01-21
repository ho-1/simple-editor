'use client';

import styled from 'styled-components'
import { ThemeModal } from '@/components/theme-modal'

interface HeaderProps {}

export const Header = ({}: HeaderProps) => {
  return (
    <HeaderStyle>
      <ThemeModal />
    </HeaderStyle>
  );
}

const HeaderStyle = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    padding: 16px;
`