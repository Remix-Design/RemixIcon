import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M13 10H20L11 23V14H4L13 1V10Z" />
    </Svg>
  )
}

Icon.displayName = 'FlashlightFill'

/**
 * Remix Icon: Flashlight Fill
 * @see {@link https://remixicon.com/icon/flashlight-fill Remix Icon Docs}
 */
export const FlashlightFill = memo(Icon)
