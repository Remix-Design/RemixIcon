import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M4.99989 10.0001L4.99976 19L6.99976 19L6.99986 12.0001L14.5859 12V17.4142L21.0001 11L14.5859 4.58578L14.5859 10L4.99989 10.0001Z" />
    </Svg>
  )
}

Icon.displayName = 'CornerUpRightFill'

/**
 * Remix Icon: Corner Up Right Fill
 * @see {@link https://remixicon.com/icon/corner-up-right-fill Remix Icon Docs}
 */
export const CornerUpRightFill = memo(Icon)
