import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M16.95 8.46448L18.3642 7.05026L23.3139 12L18.3642 16.9498L16.95 15.5355L20.4855 12L16.95 8.46448ZM7.05048 8.46448L3.51495 12L7.05048 15.5355L5.63627 16.9498L0.686523 12L5.63627 7.05026L7.05048 8.46448Z" />
    </Svg>
  )
}

Icon.displayName = 'CodeView'

/**
 * Remix Icon: Code View
 * @see {@link https://remixicon.com/icon/code-view Remix Icon Docs}
 */
export const CodeView = memo(Icon)
