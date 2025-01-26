import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M16 8.99669L20.3714 10.7452C20.751 10.8971 21 11.2648 21 11.6737V20.9967C21 21.549 20.5523 21.9967 20 21.9967H4C3.44772 21.9967 3 21.549 3 20.9967V11.6737C3 11.2648 3.24895 10.8971 3.62861 10.7452L8 8.99669H16ZM15.6148 10.9967H8.38517L5 12.3508V19.9967H19V18.9967H8V13.9967H19V12.3508L15.6148 10.9967ZM16 2.99669C16.5523 2.99669 17 3.4444 17 3.99669V7.99669H7V3.99669C7 3.4444 7.44772 2.99669 8 2.99669H16ZM15 4.99669H9V5.99669H15V4.99669Z" />
    </Svg>
  )
}

Icon.displayName = 'InkBottleLine'

/**
 * Remix Icon: Ink Bottle Line
 * @see {@link https://remixicon.com/icon/ink-bottle-line Remix Icon Docs}
 */
export const InkBottleLine = memo(Icon)
