import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import settings from '@/data/settings'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whiteList: [settings.name]
}

const rootReducer = combineReducers({
  [settings.name]: settings.reducer
})

export const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer)
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>

export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
