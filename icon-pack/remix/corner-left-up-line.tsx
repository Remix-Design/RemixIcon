import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M10.0001 19.0001L19 19.0002L19 17.0002L12.0001 17.0001L12 6.8283L15.9497 10.778L17.364 9.36381L11 2.99985L4.63603 9.36381L6.05025 10.778L10 6.82825L10.0001 19.0001Z" />
    </Svg>
  )
}

Icon.displayName = 'CornerLeftUpLine'

/**
 * Remix Icon: Corner Left Up Line
 * @see {@link https://remixicon.com/icon/corner-left-up-line Remix Icon Docs}
 */
export const CornerLeftUpLine = memo(Icon)
