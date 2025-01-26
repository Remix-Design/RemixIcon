import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M6 7 18 7V9L6 9 6 7ZM12 11 6 17H18L12 11Z" />
    </Svg>
  )
}

Icon.displayName = 'SkipUpFill'

/**
 * Remix Icon: Skip Up Fill
 * @see {@link https://remixicon.com/icon/skip-up-fill Remix Icon Docs}
 */
export const SkipUpFill = memo(Icon)
