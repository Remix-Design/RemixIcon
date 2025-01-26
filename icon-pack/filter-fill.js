import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M21 4V6H20L14 15V22H10V15L4 6H3V4H21Z" />
    </Svg>
  )
}

Icon.displayName = 'FilterFill'

/**
 * Remix Icon: Filter Fill
 * @see {@link https://remixicon.com/icon/filter-fill Remix Icon Docs}
 */
export const FilterFill = memo(Icon)
