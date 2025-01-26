import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M4.99989 13.9999L4.99976 5.00003L6.99976 5L6.99986 11.9999L14.5859 12V6.58581L21.0001 13L14.5859 19.4142L14.5859 14L4.99989 13.9999Z" />
    </Svg>
  )
}

Icon.displayName = 'CornerDownRightFill'

/**
 * Remix Icon: Corner Down Right Fill
 * @see {@link https://remixicon.com/icon/corner-down-right-fill Remix Icon Docs}
 */
export const CornerDownRightFill = memo(Icon)
