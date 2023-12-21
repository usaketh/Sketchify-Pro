import { configureStore } from '@reduxjs/toolkit'
import MenuReducer from '@/slice/menuSlice'
import ToolboxReducer from '@/slice/toolboxSlice'

export const store = configureStore({
    reducer: {
        menu: MenuReducer,
        toolbox: ToolboxReducer
    }
})