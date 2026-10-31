import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Layout } from './components/Layout'
import { LanguageProvider } from './i18n'
import { HomePage } from './pages/HomePage'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <HomePage /> },
      {
        path: '/project/:projectId',
        lazy: async () => ({
          Component: (await import('./pages/ProjectPage')).ProjectPage,
        }),
      },
    ],
  },
])

const App = () => {
  return (
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  )
}

export default App
