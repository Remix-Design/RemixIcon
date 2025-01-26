import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M4.22173 18.3642L5.63574 19.7784L15.2427 10.1716L19.071 14L19.071 4.92892L9.99999 4.92893L13.8284 8.75738L4.22173 18.3642Z" />
    </Svg>
  )
}

Icon.displayName = 'ArrowRightUpLongFill'

/**
 * Remix Icon: Arrow Right Up Long Fill
 * @see {@link https://remixicon.com/icon/arrow-right-up-long-fill Remix Icon Docs}
 */
export const ArrowRightUpLongFill = memo(Icon)
