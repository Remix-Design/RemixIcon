import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M16 2L21 7V21.0082C21 21.556 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5447 3 21.0082V2.9918C3 2.44405 3.44495 2 3.9934 2H16ZM15 11V10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10V11H8V16H16V11H15ZM13 11H11V10C11 9.44772 11.4477 9 12 9C12.5523 9 13 9.44772 13 10V11Z" />
    </Svg>
  )
}

Icon.displayName = 'FileLockFill'

/**
 * Remix Icon: File Lock Fill
 * @see {@link https://remixicon.com/icon/file-lock-fill Remix Icon Docs}
 */
export const FileLockFill = memo(Icon)
