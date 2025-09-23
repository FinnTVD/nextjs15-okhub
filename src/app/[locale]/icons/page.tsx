'use client'

import { useState } from 'react'

import { getIconComponents } from '@/utils/iconScanner'

// Get all icon components automatically
const iconComponents = getIconComponents()

export default function IconsPage() {
  const [copiedIcon, setCopiedIcon] = useState<string | null>(null)

  const copyToClipboard = async (iconName: string) => {
    try {
      await navigator.clipboard.writeText(iconName)
      setCopiedIcon(iconName)
      setTimeout(() => setCopiedIcon(null), 2000)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  return (
    <div className='min-h-screen bg-gray-50 py-8'>
      <div className='container mx-auto px-4'>
        <div className='mb-8'>
          <h1 className='text-3xl font-bold text-gray-900 mb-2'>Icon Components Library</h1>
          <p className='text-gray-600'>
            Click on any icon to copy its component name for easy usage
          </p>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6'>
          {Object.entries(iconComponents).map(([iconName, IconComponent]) => (
            <div
              key={iconName}
              className='bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer group'
              onClick={() => copyToClipboard(iconName)}
            >
              <div className='flex flex-col items-center space-y-4'>
                {/* Icon display */}
                <div className='w-12 h-12 flex items-center justify-center bg-gray-100 rounded-lg group-hover:bg-gray-200 transition-colors'>
                  <IconComponent className='w-6 h-6 text-gray-700' />
                </div>

                {/* Component name */}
                <div className='text-center'>
                  <p className='text-sm font-medium text-gray-900 break-all'>{iconName}</p>

                  {/* Copy status */}
                  {copiedIcon === iconName && (
                    <p className='text-xs text-green-600 mt-1'>✓ Copied!</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Usage instructions */}
        <div className='mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6'>
          <h2 className='text-lg font-semibold text-blue-900 mb-3'>How to use these icons</h2>
          <div className='text-sm text-blue-800 space-y-2'>
            <p>1. Click on any icon above to copy its component name</p>
            <p>2. Import the component in your file:</p>
            <code className='block bg-blue-100 p-2 rounded mt-2 text-xs'>
              {'import { ICArrowRight } from "@/components/icons"'}
            </code>
            <p>3. Use it in your JSX:</p>
            <code className='block bg-blue-100 p-2 rounded mt-2 text-xs'>
              &lt;ICArrowRight className=&apos;w-6 h-6 text-gray-700&apos; /&gt;
            </code>
          </div>
        </div>
      </div>
    </div>
  )
}
