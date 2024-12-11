import MainRouter from '@/routes/MainRouter'
import { NextUIProvider } from '@nextui-org/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const App = () => {
    const queryClient = new QueryClient()
    return (
        <QueryClientProvider client={queryClient}>
            <NextUIProvider>
                <MainRouter />
            </NextUIProvider>
        </QueryClientProvider>
    )
}

export default App
