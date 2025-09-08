'use client'

import { FC } from 'react'

import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from '@/components/ui/drawer'
import { cn } from '@/lib/utils'

interface DrawerProviderProps {
  children: React.ReactNode
  className?: string
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const DrawerProvider: FC<DrawerProviderProps> = ({ children, className, open, setOpen }) => {
  return (
    <Drawer
      onOpenChange={(open) => setOpen(open)}
      open={open}
    >
      <DrawerContent
        suppressHydrationWarning
        className={cn(
          'w-full bg-white rounded-[1.25rem_1.25rem_0rem_0rem] min-h-[16.7rem]',
          className,
        )}
      >
        {/* Giữ lại để tránh báo error */}
        <DrawerHeader className='hidden'>
          <DrawerTitle></DrawerTitle>
        </DrawerHeader>
        {children}
      </DrawerContent>
    </Drawer>
  )
}

export default DrawerProvider
