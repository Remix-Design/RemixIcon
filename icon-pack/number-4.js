import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M16.0001 1.5L16 16H19.0001V18H16L16.0001 22H14.0001L14 18H4V16.898L14.0001 1.5H16.0001ZM14 16V5.171L6.968 16H14Z" />
    </Svg>
  )
}

Icon.displayName = 'Number4'

/**
 * Remix Icon: Number 4
 * @see {@link https://remixicon.com/icon/number-4 Remix Icon Docs}
 */
export const Number4 = memo(Icon)
