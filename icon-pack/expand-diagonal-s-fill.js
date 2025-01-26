import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19 5H11.5L14.5429 8.04289L8.04289 14.5429L5 11.5V19H12.5L9.45711 15.9571L15.9571 9.45711L19 12.5V5Z" />
    </Svg>
  )
}

Icon.displayName = 'ExpandDiagonalSFill'

/**
 * Remix Icon: Expand Diagonal S Fill
 * @see {@link https://remixicon.com/icon/expand-diagonal-s-fill Remix Icon Docs}
 */
export const ExpandDiagonalSFill = memo(Icon)
