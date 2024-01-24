import { Header } from '@/shared/components/layout/Header'
import { Outlet } from 'react-router-dom'

export default function RootLayout() {
  return (
    <>
      <Header/>

      <Outlet/>
    </>
  )
}
