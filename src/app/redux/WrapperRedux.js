'use client'
import { useStore } from './Store';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

export default function RootReduxRegistry(props) {
    // const { pageProps } = props;
    // const store = useStore(pageProps.initialReduxState)
    const { pageProps, children } = props;

    // console.log('children',children)


    // console.log('pageProps',pageProps)


    // const persistor = persistStore(store, {}, function () {
    //   persistor.persist()
    // })

    const store = useStore(pageProps?.initialReduxState)

    const persistor = persistStore(store, {}, function () {
        persistor.persist()
    })

    
    return (
        <Provider store={store}>
            <PersistGate loading={<div>loading</div>} persistor={persistor}>
                {children}
            </PersistGate>
        </Provider>
    )
}

