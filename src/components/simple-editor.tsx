'use client';

import { useRecoilValue } from 'recoil'
import { useState } from 'react'
import styled from 'styled-components'
import { themeState } from '@/recoil/themeAtom'
import { sampleData } from '@/data'
import { Editor } from '@monaco-editor/react'

interface SimpleEditorProps {}

export const SimpleEditor = ({}: SimpleEditorProps) => {
  const [code, setCode] = useState<string>(sampleData)
  const theme = useRecoilValue(themeState);

  const handleEditorChange = (value: string = "") => {
    setCode(value);
  }

  return (
    <Main>
      <EditorWrapper>
        <Editor
          width='50vw'
          height='90vh'
          theme={theme}
          language='html'
          defaultValue={code}
          options={{ minimap: { enabled: false } }}
          onChange={handleEditorChange}
        />
      </EditorWrapper>
    </Main>
  );
}

const Main = styled.main`
    padding-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const EditorWrapper = styled.div`
    border: 1px solid #7b7b7b;
`
