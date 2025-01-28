import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_1510)">
        <Path
          d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z"
          fill={color}
        />
        <Path
          d="M39.9997 19.9998C39.9997 12.0706 35.3852 5.21938 28.6953 1.98438V38.0152C35.3852 34.7803 39.9997 27.929 39.9997 19.9998V19.9998Z"
          fill={color}
        />
        <Path
          d="M0 19.9998C0 27.929 4.61445 34.7803 11.3044 38.0153V1.98438C4.61445 5.21937 0 12.0706 0 19.9998Z"
          fill={color}
        />
        <Path
          d="M25.2263 23.3818L21.8446 20.0001L25.0636 16.7809L24.9177 15.0808L23.9962 14.1591L19.9999 18.1553L16.0037 14.1591L15.0821 15.0808L14.9362 16.7809L18.1552 20.0001L14.7734 23.3818L16.6181 25.2263L19.9999 21.8447L23.3817 25.2263L25.2263 23.3818Z"
          fill={color}
        />
        <Path
          d="M24.9184 15.0811L23.0738 16.9257C23.8606 17.7125 24.3473 18.7994 24.3473 20C24.3473 22.4013 22.4007 24.3479 19.9995 24.3479C17.5984 24.3479 15.6516 22.4013 15.6516 20C15.6516 18.7994 16.1384 17.7125 16.9252 16.9257L15.0805 15.0811C13.8216 16.3398 13.043 18.0789 13.043 20C13.043 23.8421 16.1575 26.9565 19.9995 26.9565C23.8414 26.9565 26.9559 23.842 26.9559 20C26.9559 18.079 26.1773 16.3399 24.9184 15.0811V15.0811Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_1510">
          <Rect width="40" height="40" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Guatemala'

/**
 * Flags by Deji.Zeal: Guatemala
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Guatemala = memo(Icon)
