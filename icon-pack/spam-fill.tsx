import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M17.5 2.5L23 12L17.5 21.5H6.5L1 12L6.5 2.5H17.5ZM11 15V17H13V15H11ZM11 7V13H13V7H11Z" />
    </Svg>
  )
}

Icon.displayName = 'SpamFill'

/**
 * Remix Icon: Spam Fill
 * @see {@link https://remixicon.com/icon/spam-fill Remix Icon Docs}
 */
export const SpamFill = memo(Icon)
