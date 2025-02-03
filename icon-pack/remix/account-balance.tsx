import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Mask, Path, Rect } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 25 24" fill={color} height={size} width={size} {...otherProps}>
      <Mask
        id="mask0_1009_49486"
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
      <G mask="url(#mask0_1009_49486)">
        <Path
          d="M5.89062 17V10H7.89062V17H5.89062ZM11.8906 17V10H13.8906V17H11.8906ZM2.89062 21V19H22.8906V21H2.89062ZM17.8906 17V10H19.8906V17H17.8906ZM2.89062 8V6L12.8906 1L22.8906 6V8H2.89062Z"
          fill={color}
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'AccountBalance'

/**
 * Remix Icon: Account Balance
 * @see {@link https://remixicon.com/icon/account-balance Remix Icon Docs}
 */
export const AccountBalance = memo(Icon)
