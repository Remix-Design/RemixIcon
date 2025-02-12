import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 16 16" fill="none" height={size} width={size} {...otherProps}>
      <Path
        d="M14 3.33334C14 4.43791 11.3137 5.33334 8 5.33334C4.68629 5.33334 2 4.43791 2 3.33334M14 3.33334C14 2.22877 11.3137 1.33334 8 1.33334C4.68629 1.33334 2 2.22877 2 3.33334M14 3.33334V12.6667C14 13.1971 13.3679 13.7058 12.2426 14.0809C11.1174 14.456 9.5913 14.6667 8 14.6667C6.4087 14.6667 4.88258 14.456 3.75736 14.0809C2.63214 13.7058 2 13.1971 2 12.6667V3.33334M2 8.00001C2 8.53044 2.63214 9.03915 3.75736 9.41422C4.88258 9.7893 6.4087 10 8 10C9.5913 10 11.1174 9.7893 12.2426 9.41422C13.3679 9.03915 14 8.53044 14 8.00001"
        stroke={color}
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

Icon.displayName = 'Database'

/**
 * Lucide Icon: Database
 * @see {@link https://lucide.dev/icons/database Lucide Icon Docs}
 */
export const Database = memo(Icon)
