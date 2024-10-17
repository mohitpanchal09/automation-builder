import { ConnectionsProvider } from '@/providers/connection-provider'
import EditorProvider from '@/providers/editor-provider'
import React from 'react'
import EditorCanvas from './[editorId]/_components/editor-canvas'
type Props = {}
const page = (props: Props) => {
  return (
    <div className='h-full'>
      <EditorProvider>
        <ConnectionsProvider>
          <EditorCanvas/>
        </ConnectionsProvider>
      </EditorProvider>
    </div>
  )
}

export default page