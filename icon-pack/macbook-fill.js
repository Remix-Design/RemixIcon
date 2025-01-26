import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M2 4.00685C2 3.45078 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44995 22 4.00685V17H2V4.00685ZM1 19H23V21H1V19Z" />
    </Svg>
  )
}

Icon.displayName = 'MacbookFill'

/**
 * Remix Icon: Macbook Fill
 * @see {@link https://remixicon.com/icon/macbook-fill Remix Icon Docs}
 */
export const MacbookFill = memo(Icon)
