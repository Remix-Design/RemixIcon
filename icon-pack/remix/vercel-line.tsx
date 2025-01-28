import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M23 21.6479L12 2.35205L1 21.6479H23ZM19.5577 19.6479H4.4423L12 6.39042L19.5577 19.6479Z" />
    </Svg>
  )
}

Icon.displayName = 'VercelLine'

/**
 * Remix Icon: Vercel Line
 * @see {@link https://remixicon.com/icon/vercel-line Remix Icon Docs}
 */
export const VercelLine = memo(Icon)
