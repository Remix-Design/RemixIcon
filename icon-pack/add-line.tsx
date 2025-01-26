import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z" />
    </Svg>
  )
}

Icon.displayName = 'AddLine'

/**
 * Remix Icon: Add Line
 * @see {@link https://remixicon.com/icon/add-line Remix Icon Docs}
 */
export const AddLine = memo(Icon)
