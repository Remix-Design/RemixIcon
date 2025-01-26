import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M21 17.9996V19.9996H3V17.9996H21ZM17 3.5L22 8.49955L17 13.5V3.5ZM12 10.9996V12.9996H3V10.9996H12ZM12 3.99955V5.99955H3V3.99955H12Z" />
    </Svg>
  )
}

Icon.displayName = 'MenuUnfoldFill'

/**
 * Remix Icon: Menu Unfold Fill
 * @see {@link https://remixicon.com/icon/menu-unfold-fill Remix Icon Docs}
 */
export const MenuUnfoldFill = memo(Icon)
