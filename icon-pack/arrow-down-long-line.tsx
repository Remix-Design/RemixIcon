import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M13.0001 1.99974L11.0002 1.9996L11.0002 18.1715L7.05044 14.2218L5.63623 15.636L12.0002 22L18.3642 15.636L16.9499 14.2218L13.0002 18.1716L13.0001 1.99974Z" />
    </Svg>
  )
}

Icon.displayName = 'ArrowDownLongLine'

/**
 * Remix Icon: Arrow Down Long Line
 * @see {@link https://remixicon.com/icon/arrow-down-long-line Remix Icon Docs}
 */
export const ArrowDownLongLine = memo(Icon)
