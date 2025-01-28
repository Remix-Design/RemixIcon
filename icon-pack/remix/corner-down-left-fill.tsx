import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19.0001 13.9999L19.0002 5.00003L17.0002 5L17.0001 11.9999L9.41406 12V6.58581L2.99986 13L9.41406 19.4142L9.41406 14L19.0001 13.9999Z" />
    </Svg>
  )
}

Icon.displayName = 'CornerDownLeftFill'

/**
 * Remix Icon: Corner Down Left Fill
 * @see {@link https://remixicon.com/icon/corner-down-left-fill Remix Icon Docs}
 */
export const CornerDownLeftFill = memo(Icon)
