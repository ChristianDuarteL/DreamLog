import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LoadingPage from './pages/LoadingPage'
import { Suspense, lazy } from 'react'
import { addToLoad } from './core/app_loader'
import EditDream from './pages/EditDream';

const Layout = lazy(addToLoad(() => import('./pages/Layout')));
const Home = lazy(addToLoad(() => import('./pages/Home')));
const LogDream = lazy(addToLoad(() => import('./pages/LogDream')));
const About = lazy(addToLoad(() => import('./pages/About')));
const Dream = lazy(addToLoad(() => import('./pages/Dream')));
addToLoad(() => import('./model/db').then(e => e.db.open()))

const router = createBrowserRouter([
  {
    path: '/',
    element: <Suspense><Layout/></Suspense>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/log-dream",
        element: <LogDream></LogDream>,
      },
      {
        path: "/edit/:dream_id",
        element: <EditDream></EditDream>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/dream/:dream_id",
        element: <Dream></Dream>,
      },
    ]
  }
]);

function App() {
  return (
    <main className='relative'>
      <LoadingPage>
        <RouterProvider router={router}></RouterProvider>
      </LoadingPage>
    </main>
  )
}

export default App
