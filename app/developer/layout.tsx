
import React from 'react'
import { AuthProvider } from '@/context/AuthContext'
import { developerMenuItems, DeveloperSidebar } from '@/components/developer/ui/DeveloperSidebar'
import { SidebarProvider } from '@/components/ui/sidebar'
import MobileHeader from '../_neutral/header/MobileHeader'


const layout = ({ 
  children 
}: { 
  children: React.ReactElement 
}) => {
  return (
    <AuthProvider>
      <SidebarProvider>
      <main>
        <div className="flex w-[100vw]">
          <aside className="hidden lg:block">
            <DeveloperSidebar />
          </aside>
          <section className="children overflow-y-auto h-[100vh] w-full">
            <div className='lg:hidden'>
              <MobileHeader menu={developerMenuItems} />
            </div>
            <div className="min-h-[90vh">
              {children}
            </div>
          </section>
        </div>
      </main>
      </SidebarProvider>
      </AuthProvider>
  )
}
export default layout