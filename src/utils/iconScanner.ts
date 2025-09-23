// Utility to automatically scan and import icon components
import * as Icons from '@/components/icons'

export function getIconComponents() {
  return Object.entries(Icons).reduce(
    (acc, [name, component]) => {
      // Only include components that start with 'IC' (Icon Components)
      if (name.startsWith('IC') && typeof component === 'function') {
        acc[name] = component as React.ComponentType<{ className?: string }>
      }
      return acc
    },
    {} as Record<string, React.ComponentType<{ className?: string }>>,
  )
}

export function getIconNames() {
  return Object.keys(getIconComponents())
}
