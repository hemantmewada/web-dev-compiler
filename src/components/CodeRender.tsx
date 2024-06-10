import { RootState } from '@/redux/store'
import React from 'react'
import { useSelector } from 'react-redux'

const CodeRender = () => {
    const { html, css, javascript } = useSelector((state: RootState) => state.compilerSlice.langs)
    const combineCode = `<html><head><style>${css}</style></head><body>${html}</body><script>${javascript}</script></html>`;
    const iframeCode = `data:text/html;charset=utf-8,${encodeURIComponent(combineCode)}`;
  return (
    <div className='bg-white h-full'>
        <iframe className='w-full h-full' src={iframeCode}></iframe>
    </div>
  )
}

export default CodeRender