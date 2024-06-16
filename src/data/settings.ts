import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { RootState } from '@/services/store'
import { setCurrentLanguage } from '@/services/translation'

interface SettingsState {
  language?: string
}

const initialState: SettingsState = {
}

export const counterSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<string>) => {
      const result = setCurrentLanguage(action.payload)

      if (result) {
        state.language = action.payload
      }
    },
  },
})

export const { setLanguage } = counterSlice.actions

export const selectSettingsLanguage = (state: RootState) => state.settings.language

export default counterSlice