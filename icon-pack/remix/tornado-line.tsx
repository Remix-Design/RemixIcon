import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M2 3H22V5H2V3ZM4 7H20V9H4V7ZM8 11H22V13H8V11ZM10 15H18V17H10V15ZM8 19H14V21H8V19Z" />
    </Svg>
  )
}

Icon.displayName = 'TornadoLine'

/**
 * Remix Icon: Tornado Line
 * @see {@link https://remixicon.com/icon/tornado-line Remix Icon Docs}
 */
export const TornadoLine = memo(Icon)
