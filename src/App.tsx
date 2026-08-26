import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Layout } from './components/Layout'
import { LanguageProvider } from './i18n'
import { HomePage } from './pages/HomePage'
import { ProjectPage } from './pages/ProjectPage'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/project/:projectId', element: <ProjectPage /> },
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
