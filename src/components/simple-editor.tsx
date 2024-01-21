'use client';

import { useRecoilState } from 'recoil'
import { useState } from 'react'
import { themeState } from '@/recoil/themeAtom'
import styled from 'styled-components'
import MonacoEditor from 'react-monaco-editor/lib/editor'

interface SimpleEditorProps {}

export const SimpleEditor = ({}: SimpleEditorProps) => {
  const [code, setCode] = useState<string>('console.log("Hello, world!")')
  const theme = useRecoilState(themeState);

  const onChange = (newValue: string, event: any) => {
    setCode(newValue);
  };

  return (
    <Main>
      <MonacoEditor
        width="800px"
        height="60vh"
        language="javascript"
        onChange={onChange}
        defaultValue={code}
        value={code}
        theme='vs-dark'
        options={{
          minimap: {
            enabled: false
          }
        }}
      />
    </Main>
  );
}

const Main = styled.main`
    padding-top: 50px;
`
