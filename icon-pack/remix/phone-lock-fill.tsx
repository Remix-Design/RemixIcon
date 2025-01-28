import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M18 2C18.5523 2 19 2.44772 19 3L19.0012 10.1003C18.6777 10.0345 18.3429 10 18 10C15.5811 10 13.5634 11.7177 13.1001 13.9998L12 14V22H6C5.44772 22 5 21.5523 5 21V3C5 2.44772 5.44772 2 6 2H18ZM18 12C19.6569 12 21 13.3431 21 15V16H22V21C22 21.5523 21.5523 22 21 22H15C14.4477 22 14 21.5523 14 21V16H15V15C15 13.3431 16.3431 12 18 12ZM18 14C17.4872 14 17 14.45 17 15V16H19V15C19 14.4477 18.5523 14 18 14Z" />
    </Svg>
  )
}

Icon.displayName = 'PhoneLockFill'

/**
 * Remix Icon: Phone Lock Fill
 * @see {@link https://remixicon.com/icon/phone-lock-fill Remix Icon Docs}
 */
export const PhoneLockFill = memo(Icon)
