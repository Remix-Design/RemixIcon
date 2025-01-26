import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M3 3H21V21H3V3ZM10.5637 5.53613H6.25452V18.4635H10.5637V15.5907H12.0001V17.0271H13.4364V18.4635H17.7455V14.1543H16.3091V12.7179H14.8728V11.2816H16.3091V9.8452H17.7455V5.53613H13.4364V6.97249H12.0001V8.40884H10.5637V5.53613Z" />
    </Svg>
  )
}

Icon.displayName = 'KickFill'

/**
 * Remix Icon: Kick Fill
 * @see {@link https://remixicon.com/icon/kick-fill Remix Icon Docs}
 */
export const KickFill = memo(Icon)
