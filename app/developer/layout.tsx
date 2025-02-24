
import React from 'react'
import { AuthProvider } from '@/context/AuthContext'


const layout = ({ 
  children 
}: { 
  children: React.ReactElement 
}) => {
  return (
    <AuthProvider>
      <main>
        <div className="flex w-[100vw]">
          <aside className="hidden lg:block">
          </aside>
          <section className="children overflow-y-auto h-[100vh] w-full">
            <div className="min-h-[80vh]">
              {children}
            </div>
          </section>
        </div>
      </main>
      </AuthProvider>
  )
}
export default layout