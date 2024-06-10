import React from 'react'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import CodeEditor from '@/components/CodeEditor'
import CodeRender from '@/components/CodeRender'

const Compiler = () => {
  return (
    <ResizablePanelGroup direction="horizontal" >
      <ResizablePanel defaultSize={50} className='h-[calc(100dvh-60px)] md:min-w-[350px] min-w-[200px]'>
        <CodeEditor />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={50} className='h-[calc(100dvh-60px)] md:min-w-[350px] min-w-[200px]'>
        <CodeRender />
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}

export default Compiler