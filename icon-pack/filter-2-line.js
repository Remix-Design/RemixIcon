import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M14 14V20L10 22V14L4 5V3H20V5L14 14ZM6.4037 5L12 13.3944L17.5963 5H6.4037Z" />
    </Svg>
  )
}

Icon.displayName = 'Filter2Line'

/**
 * Remix Icon: Filter 2 Line
 * @see {@link https://remixicon.com/icon/filter-2-line Remix Icon Docs}
 */
export const Filter2Line = memo(Icon)
