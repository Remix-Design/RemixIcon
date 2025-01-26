import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M6 5H8V19H6V5ZM16 5H18V19H16V5Z" />
    </Svg>
  )
}

Icon.displayName = 'PauseFill'

/**
 * Remix Icon: Pause Fill
 * @see {@link https://remixicon.com/icon/pause-fill Remix Icon Docs}
 */
export const PauseFill = memo(Icon)
