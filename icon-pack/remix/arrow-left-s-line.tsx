import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z" />
    </Svg>
  )
}

Icon.displayName = 'ArrowLeftSLine'

/**
 * Remix Icon: Arrow Left S Line
 * @see {@link https://remixicon.com/icon/arrow-left-s-line Remix Icon Docs}
 */
export const ArrowLeftSLine = memo(Icon)
