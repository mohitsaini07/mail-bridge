import { Suspense, lazy } from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import { Spin } from 'antd'
import AuthProtection from './components/auth-protection'
import AppShell from './components/app-shell'

const Signup = lazy(() => import('~/pages/signup'))
const Login = lazy(() => import('~/pages/login'))
const Dashboard = lazy(() => import('~/pages/dashboard'))
const ApiKeys = lazy(() => import('~/pages/api-keys'))
const Templates = lazy(() => import('~/pages/templates'))
const CreateTemplate = lazy(() => import('~/pages/create-template'))
const UpdateTemplate = lazy(() => import('~/pages/update-template'))
const AboutUs = lazy(() => import('~/pages/about-us'))

function App() {
  return (
    <Suspense
      fallback={
        <div className="flex h-screen w-full items-center justify-center">
          <Spin>Login please wait.</Spin>
        </div>
      }
    >
      <Routes>
        <Route
          element={
            <AuthProtection>
              <AppShell>
                <Outlet />
              </AppShell>
            </AuthProtection>
          }
        >
          <Route element={<Dashboard />} path="/" />
          <Route element={<ApiKeys />} path="/api-keys" />
          <Route element={<Templates />} path="/templates" />
          <Route element={<CreateTemplate />} path="/create-template" />
          <Route element={<UpdateTemplate />} path="/template/:id" />
          <Route element={<AboutUs />} path="/about-us" />
        </Route>

        <Route element={<Signup />} path="signup" />
        <Route element={<Login />} path="login" />
      </Routes>
    </Suspense>
  )
}

export default App
