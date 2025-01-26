import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M14 12L10 16V8L14 12Z" />
    </Svg>
  )
}

Icon.displayName = 'ArrowDropRightFill'

/**
 * Remix Icon: Arrow Drop Right Fill
 * @see {@link https://remixicon.com/icon/arrow-drop-right-fill Remix Icon Docs}
 */
export const ArrowDropRightFill = memo(Icon)
