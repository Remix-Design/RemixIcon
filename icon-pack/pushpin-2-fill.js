import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M18 3V5H17V11L19 14V16H13V23H11V16H5V14L7 11V5H6V3H18Z" />
    </Svg>
  )
}

Icon.displayName = 'Pushpin2Fill'

/**
 * Remix Icon: Pushpin 2 Fill
 * @see {@link https://remixicon.com/icon/pushpin-2-fill Remix Icon Docs}
 */
export const Pushpin2Fill = memo(Icon)
