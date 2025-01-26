import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M5 2H15L19.7071 6.70711C19.8946 6.89464 20 7.149 20 7.41421V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V3C4 2.44772 4.44772 2 5 2ZM8 12V18H16V12H8Z" />
    </Svg>
  )
}

Icon.displayName = 'SimCardFill'

/**
 * Remix Icon: Sim Card Fill
 * @see {@link https://remixicon.com/icon/sim-card-fill Remix Icon Docs}
 */
export const SimCardFill = memo(Icon)
