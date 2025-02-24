import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Mask, Path, Rect } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 25 25" fill={color} height={size} width={size} {...otherProps}>
      <Mask
        id="mask0_1009_42118"
        style={{
          maskType: 'alpha',
        }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="25"
        height="25"
      >
        <Rect x="0.890625" y="0.5" width="24" height="24" fill={color} />
      </Mask>
      <G mask="url(#mask0_1009_42118)">
        <Path
          d="M8.89062 22.5L9.89062 15.5H4.89062L13.8906 2.5H15.8906L14.8906 10.5H20.8906L10.8906 22.5H8.89062Z"
          fill={color}
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'Bolt'

export const Bolt = memo(Icon)
