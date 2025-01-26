import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M18 9 12 3 6 9H18ZM18 15 12 21 6 15H18Z" />
    </Svg>
  )
}

Icon.displayName = 'ExpandUpDownFill'

/**
 * Remix Icon: Expand Up Down Fill
 * @see {@link https://remixicon.com/icon/expand-up-down-fill Remix Icon Docs}
 */
export const ExpandUpDownFill = memo(Icon)
