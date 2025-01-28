import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill="none" height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_2073)">
        <Path
          d="M20 39.9999C31.0457 39.9999 40 31.0456 40 19.9999C40 8.95418 31.0457 -0.00012207 20 -0.00012207C8.95431 -0.00012207 0 8.95418 0 19.9999C0 31.0456 8.95431 39.9999 20 39.9999Z"
          fill="#FCFCFC"
        />
        <Path
          d="M8.26082 18.5506L6.08691 14.6066L8.26082 10.7245L10.4347 14.6066L8.26082 18.5506Z"
          fill="#A2001D"
        />
        <Path
          d="M3.91316 18.5506L1.73926 14.6066L3.91316 10.7245L6.08707 14.6066L3.91316 18.5506Z"
          fill="#A2001D"
        />
        <Path
          d="M8.26082 29.2753L6.08691 25.3313L8.26082 21.4492L10.4347 25.3313L8.26082 29.2753Z"
          fill="#A2001D"
        />
        <Path
          d="M3.91316 29.2753L1.73926 25.3313L3.91316 21.4492L6.08707 25.3313L3.91316 29.2753Z"
          fill="#A2001D"
        />
        <Path
          d="M10.4353 3.88214L9.81984 2.78308C8.71594 3.43714 7.68055 4.19441 6.72656 5.0416L8.26141 7.82605L10.4353 3.88214Z"
          fill="#A2001D"
        />
        <Path
          d="M8.26105 32.1738L6.70996 34.9438C7.66309 35.7921 8.69777 36.5505 9.80121 37.2059L10.435 36.056L8.26105 32.1738Z"
          fill="#A2001D"
        />
        <Path
          d="M12.1738 25.2174V38.4098C14.5777 39.433 17.2224 40 19.9999 40C28.5992 40 35.9301 34.5725 38.7559 26.9565L12.1738 25.2174Z"
          fill="#6DA544"
        />
        <Path
          d="M38.7559 26.9565C39.5599 24.7898 39.9999 22.4464 39.9999 20C39.9999 8.95437 31.0455 0 19.9999 0C17.2227 0 14.5777 0.566641 12.1738 1.58969V26.9566H38.7559V26.9565Z"
          fill="#A2001D"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_2073">
          <Rect width="40" height="40" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Belarus'

/**
 * Flags by `Deji.Zeal`: Belarus
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Belarus = memo(Icon)
