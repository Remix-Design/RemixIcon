import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M17 11V4H19V21H17V13H7V21H5V4H7V11H17Z" />
    </Svg>
  )
}

Icon.displayName = 'Heading'

/**
 * Remix Icon: Heading
 * @see {@link https://remixicon.com/icon/heading Remix Icon Docs}
 */
export const Heading = memo(Icon)
