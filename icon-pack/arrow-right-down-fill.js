import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M11.6366 13.0515L5.97974 7.39468L7.39395 5.98047L13.0508 11.6373L18.0006 6.68758V18.0013H6.68684L11.6366 13.0515Z" />
    </Svg>
  )
}

Icon.displayName = 'ArrowRightDownFill'

/**
 * Remix Icon: Arrow Right Down Fill
 * @see {@link https://remixicon.com/icon/arrow-right-down-fill Remix Icon Docs}
 */
export const ArrowRightDownFill = memo(Icon)
