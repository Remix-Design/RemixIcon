import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19 11H5V13H19V11Z" />
    </Svg>
  )
}

Icon.displayName = 'SubtractFill'

/**
 * Remix Icon: Subtract Fill
 * @see {@link https://remixicon.com/icon/subtract-fill Remix Icon Docs}
 */
export const SubtractFill = memo(Icon)
