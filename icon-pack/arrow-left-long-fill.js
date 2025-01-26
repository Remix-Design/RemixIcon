import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M22.0003 12.9999L22.0004 11L8.41421 11V5.58582L2 12L8.41421 18.4142L8.41421 13L22.0003 12.9999Z" />
    </Svg>
  )
}

Icon.displayName = 'ArrowLeftLongFill'

/**
 * Remix Icon: Arrow Left Long Fill
 * @see {@link https://remixicon.com/icon/arrow-left-long-fill Remix Icon Docs}
 */
export const ArrowLeftLongFill = memo(Icon)
