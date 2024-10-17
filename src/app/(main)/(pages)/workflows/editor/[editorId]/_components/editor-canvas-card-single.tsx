import { EditorCanvasCardType } from '@/lib/types'
import { useEditor } from '@/providers/editor-provider'
import { useNodeId } from '@xyflow/react'
import React, { useMemo } from 'react'
import EditorCanvasIconHelper from './editoreditor-canvas-card-icon-hepler'

function EditorCanvasCardSingle({data}:{
    data:EditorCanvasCardType
}) {
    const {dispatch,state} = useEditor()
    const nodeId = useNodeId()
    const logo = useMemo(()=>{
        return <EditorCanvasIconHelper type={data.type}/>
    },[data])
  return (
    <div>EditorCanvasCardSingle</div>
  )
}

export default EditorCanvasCardSingle