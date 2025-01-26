import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M10.0858 12L5.29289 16.7929L6.70711 18.2071L12.9142 12L6.70711 5.79291L5.29289 7.20712L10.0858 12ZM17 6.00002L17 18H15L15 6.00002L17 6.00002Z" />
    </Svg>
  )
}

Icon.displayName = 'SkipRightLine'

/**
 * Remix Icon: Skip Right Line
 * @see {@link https://remixicon.com/icon/skip-right-line Remix Icon Docs}
 */
export const SkipRightLine = memo(Icon)
