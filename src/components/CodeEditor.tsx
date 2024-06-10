import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { tags as t } from '@lezer/highlight';
import {  draculaInit } from '@uiw/codemirror-theme-dracula';
import { loadLanguage } from '@uiw/codemirror-extensions-langs';
import HelperHeader from './HelperHeader';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { updateCode } from '@/redux/slices/compilerSlices';

const CodeEditor = () => {
    const {currentLang, langs} = useSelector((state: RootState) => state.compilerSlice);
    const dispatch = useDispatch();
    const onChange = React.useCallback((value: string) => {
        dispatch(updateCode(value));
    }, []);
    return (
        <>
            <HelperHeader />
            <CodeMirror
            value={langs[currentLang]}
            height="calc(100vh - 60px - 50px)"
            onChange={onChange}
            extensions={[loadLanguage(currentLang)!]}
            theme={draculaInit({
                settings: {
                    caret: '#c6c6c6',
                    fontFamily: 'monospace',
                },
                styles: [
                    { tag: t.comment, color: '#6272a4' },
                ]
            })}
            />
        </>
    )
}

export default CodeEditor