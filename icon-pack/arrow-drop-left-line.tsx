import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M11.8284 12.0005L14.6569 14.8289L13.2426 16.2431L9 12.0005L13.2426 7.75781L14.6569 9.17203L11.8284 12.0005Z" />
    </Svg>
  )
}

Icon.displayName = 'ArrowDropLeftLine'

/**
 * Remix Icon: Arrow Drop Left Line
 * @see {@link https://remixicon.com/icon/arrow-drop-left-line Remix Icon Docs}
 */
export const ArrowDropLeftLine = memo(Icon)
