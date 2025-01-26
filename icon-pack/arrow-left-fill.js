import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 13V20L4 12L12 4V11H20V13H12Z" />
    </Svg>
  )
}

Icon.displayName = 'ArrowLeftFill'

/**
 * Remix Icon: Arrow Left Fill
 * @see {@link https://remixicon.com/icon/arrow-left-fill Remix Icon Docs}
 */
export const ArrowLeftFill = memo(Icon)
