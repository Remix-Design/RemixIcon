import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M16 16V12L21 17L16 22V18H4V16H16ZM8 2V5.999L20 6V8H8V12L3 7L8 2Z" />
    </Svg>
  )
}

Icon.displayName = 'ArrowLeftRightFill'

/**
 * Remix Icon: Arrow Left Right Fill
 * @see {@link https://remixicon.com/icon/arrow-left-right-fill Remix Icon Docs}
 */
export const ArrowLeftRightFill = memo(Icon)
