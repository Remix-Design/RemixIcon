import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 14L8 10H16L12 14Z" />
    </Svg>
  )
}

Icon.displayName = 'ArrowDropDownFill'

/**
 * Remix Icon: Arrow Drop Down Fill
 * @see {@link https://remixicon.com/icon/arrow-drop-down-fill Remix Icon Docs}
 */
export const ArrowDropDownFill = memo(Icon)
