import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill="none" height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_936)">
        <Path
          d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z"
          fill="#F0F0F0"
        />
        <Path
          d="M39.882 22.1739C39.882 22.1738 39.8821 22.1736 39.8821 22.1733L17.9489 0.104004C16.9595 0.204863 15.9913 0.377832 15.0498 0.617598C6.39828 2.82033 0 20 0 20C0 20 27.9998 38.7371 31.1941 36.5753C31.8333 36.1428 32.4461 35.6743 33.0295 35.1728L20.0309 22.1739H39.882Z"
          fill="#0052B4"
        />
        <Path
          d="M34.7826 20.0001L15.3316 0.549194C6.53813 2.65208 0 10.5619 0 20.0001C0 31.0457 8.95438 40.0001 20 40.0001C24.1898 40.0001 28.0779 38.7108 31.2913 36.5087L14.7826 20.0001H34.7826Z"
          fill="#D80027"
        />
        <Path
          d="M19.021 29.5307L16.5784 28.3818L17.8791 26.0162L15.2268 26.5236L14.8907 23.8441L13.0432 25.8148L11.1958 23.8441L10.8596 26.5236L8.20738 26.0161L9.50809 28.3818L7.06543 29.5307L9.50809 30.6795L8.20738 33.0451L10.8598 32.5378L11.1957 35.2172L13.0432 33.2465L14.8907 35.2172L15.2268 32.5378L17.879 33.0452L16.5783 30.6797L19.021 29.5307Z"
          fill="#F0F0F0"
        />
        <Path
          d="M17.391 11.0924L15.6145 10.2568L16.5605 8.53626L14.6313 8.90533L14.3869 6.95642L13.0432 8.38978L11.6995 6.95642L11.455 8.90533L9.52586 8.53626L10.472 10.2568L8.69531 11.0924L13.0432 11.962L17.391 11.0924Z"
          fill="#F0F0F0"
        />
        <Path
          d="M18.261 11.0923C18.261 13.9738 15.9251 16.3097 13.0436 16.3097C10.1621 16.3097 7.82617 13.9738 7.82617 11.0923"
          fill="#F0F0F0"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_936">
          <Rect width="40" height="40" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Nepal'

/**
 * Flags by `Deji.Zeal`: Nepal
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Nepal = memo(Icon)
