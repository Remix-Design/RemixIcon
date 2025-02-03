import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Mask, Path, Rect } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 25 24" fill={color} height={size} width={size} {...otherProps}>
      <Mask
        id="mask0_1009_49442"
        style={{
          maskType: 'alpha',
        }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="25"
        height="24"
      >
        <Rect x="0.890625" width="24" height="24" fill={color} />
      </Mask>
      <G mask="url(#mask0_1009_49442)">
        <Path
          d="M4.39062 18.5L2.89062 17L10.3906 9.5L14.3906 13.5L21.4906 5.5L22.8906 6.9L14.3906 16.5L10.3906 12.5L4.39062 18.5Z"
          fill={color}
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'ShowChart'

/**
 * Remix Icon: Show Chart
 * @see {@link https://remixicon.com/icon/show-chart Remix Icon Docs}
 */
export const ShowChart = memo(Icon)
