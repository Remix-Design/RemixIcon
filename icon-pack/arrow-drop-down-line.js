import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 15.0006L7.75732 10.758L9.17154 9.34375L12 12.1722L14.8284 9.34375L16.2426 10.758L12 15.0006Z" />
    </Svg>
  )
}

Icon.displayName = 'ArrowDropDownLine'

/**
 * Remix Icon: Arrow Drop Down Line
 * @see {@link https://remixicon.com/icon/arrow-drop-down-line Remix Icon Docs}
 */
export const ArrowDropDownLine = memo(Icon)
