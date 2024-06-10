import React from 'react'
import { Button } from './ui/button'
import { Forward, Save } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import { compilerSliceInitialStateType, updateLang } from '@/redux/slices/compilerSlices'

  

const HelperHeader = () => {
    const currentLang = useSelector((state: RootState) => state.compilerSlice.currentLang);
    const dispatch = useDispatch();
    const handleChange = (value:string) => {
        dispatch(updateLang(value as compilerSliceInitialStateType["currentLang"]));
    }
  return (
    <div className='__helper_header h-[50px] bg-black text-white p-2 flex justify-between items-center'>
        <div className="__btn_conatiner flex gap-1">
            <Button variant="success" className='flex flex-row gap-1'><Save size={20} /> Save</Button>
            <Button variant="secondary" className='flex flex-row gap-1'><Forward size={20} /> Share</Button>
        </div>
        <div className="__tab_switcher">
            <Tabs defaultValue="html" value={currentLang} onValueChange={handleChange} className='rounded-none'>
                <TabsList>
                    <TabsTrigger value="html">HTML</TabsTrigger>
                    <TabsTrigger value="css">CSS</TabsTrigger>
                    <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                </TabsList>
            </Tabs>
        </div>
    </div>
  )
}

export default HelperHeader