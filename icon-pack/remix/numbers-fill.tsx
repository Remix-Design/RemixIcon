import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M9 18H4V10H9V18ZM15 18H10V6H15V18ZM21 18H16V2H21V18ZM22 22H3V20H22V22Z" />
    </Svg>
  )
}

Icon.displayName = 'NumbersFill'

/**
 * Remix Icon: Numbers Fill
 * @see {@link https://remixicon.com/icon/numbers-fill Remix Icon Docs}
 */
export const NumbersFill = memo(Icon)
