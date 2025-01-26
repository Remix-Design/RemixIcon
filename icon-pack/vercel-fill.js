import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M23 21.6479H1L12 2.35205L23 21.6479Z" />
    </Svg>
  )
}

Icon.displayName = 'VercelFill'

/**
 * Remix Icon: Vercel Fill
 * @see {@link https://remixicon.com/icon/vercel-fill Remix Icon Docs}
 */
export const VercelFill = memo(Icon)
