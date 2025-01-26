import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19 8H5V10H19V8ZM19 14H5V16H19V14Z" />
    </Svg>
  )
}

Icon.displayName = 'EqualLine'

/**
 * Remix Icon: Equal Line
 * @see {@link https://remixicon.com/icon/equal-line Remix Icon Docs}
 */
export const EqualLine = memo(Icon)
