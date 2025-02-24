import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Mask, Path, Rect } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 25 25" fill={color} height={size} width={size} {...otherProps}>
      <Mask
        id="mask0_1009_42109"
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
      <G mask="url(#mask0_1009_42109)">
        <Path
          d="M12.8906 21.55L3.89062 14.55L5.54062 13.3L12.8906 19L20.2406 13.3L21.8906 14.55L12.8906 21.55ZM12.8906 16.5L3.89062 9.5L12.8906 2.5L21.8906 9.5L12.8906 16.5Z"
          fill={color}
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'Layers'

export const Layers = memo(Icon)
