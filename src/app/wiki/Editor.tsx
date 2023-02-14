import * as React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { NextPage } from 'next'

import { Editor as ToastEditor } from '@toast-ui/react-editor'
import '@toast-ui/editor/dist/toastui-editor.css'

import colorSyntax from '@toast-ui/editor-plugin-color-syntax'
import 'tui-color-picker/dist/tui-color-picker.css'
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css'

interface IEditor {
  htmlStr: string
  setHtmlStr: React.Dispatch<React.SetStateAction<string>>
}

const Editor: NextPage<IEditor> = ({ htmlStr, setHtmlStr }) => {
  const editorRef = React.useRef<ToastEditor>(null)

  // Editor Change 이벤트
  const onChangeEditor = () => {
    if (editorRef.current) {
      setHtmlStr(editorRef.current.getInstance().getHTML())
    }
  }

  React.useEffect(() => {
    if (editorRef.current) {
      // 전달받은 html값으로 초기화
      editorRef.current.getInstance().setHTML(htmlStr)

      // 기존 이미지 업로드 기능 제거
      editorRef.current.getInstance().removeHook('addImageBlobHook')
      // 이미지 서버로 데이터를 전달하는 기능 추가
      editorRef.current
        .getInstance()
        .addHook('addImageBlobHook', (blob, callback) => {
          ;(async () => {
            const formData = new FormData()
            formData.append('multipartFiles', blob)

            const res = await axios.post(
              'http://localhost:8080/uploadImage',
              formData,
            )

            callback(res.data, 'input alt text')
          })()

          return false
        })
    }
  }, [])

  // Editor에 사용되는 plugin 추가
  const plugins = [
    colorSyntax, // 글자 색상 추가
  ]

  return (
    <CustomReactQuill
      initialValue=''
      previewStyle='vertical'
      initialEditType='wysiwyg'
      useCommandShortcut={true}
      ref={editorRef}
      plugins={plugins}
      onChange={onChangeEditor}
    />
  )
}

export default Editor

// style
const CustomReactQuill = styled(ToastEditor)`
  height: 300px;
`
