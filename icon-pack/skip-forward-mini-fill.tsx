import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M7.78834 17.4435C7.70398 17.5031 7.60326 17.535 7.5 17.535C7.22386 17.535 7 17.3112 7 17.035V6.96496C7 6.8617 7.03197 6.76098 7.09152 6.67662C7.25076 6.45102 7.56274 6.39723 7.78834 6.55648L14.9213 11.5915C14.9679 11.6244 15.0086 11.665 15.0415 11.7117C15.2007 11.9373 15.1469 12.2492 14.9213 12.4085L7.78834 17.4435ZM16 7C16 6.44772 16.4477 6 17 6C17.5523 6 18 6.44772 18 7V17C18 17.5523 17.5523 18 17 18C16.4477 18 16 17.5523 16 17V7Z" />
    </Svg>
  )
}

Icon.displayName = 'SkipForwardMiniFill'

/**
 * Remix Icon: Skip Forward Mini Fill
 * @see {@link https://remixicon.com/icon/skip-forward-mini-fill Remix Icon Docs}
 */
export const SkipForwardMiniFill = memo(Icon)
