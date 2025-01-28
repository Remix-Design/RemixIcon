import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_306)">
        <Path
          d="M20 40C31.0457 40 40 31.0457 40 20C40 8.95431 31.0457 0 20 0C8.9543 0 0 8.95431 0 20C0 31.0457 8.9543 40 20 40Z"
          fill={color}
        />
        <Path
          d="M19.1809 16.3428L20.8219 18.6041L23.4795 17.7424L21.8359 20.0018L23.4766 22.263L20.82 21.398L19.1765 23.6574L19.1782 20.8636L16.5215 19.9986L19.1791 19.1368L19.1809 16.3428Z"
          fill={color}
        />
        <Path
          d="M14.7027 25.6522C11.5811 25.6522 9.05047 23.1216 9.05047 20C9.05047 16.8785 11.5811 14.3478 14.7027 14.3478C15.6759 14.3478 16.5917 14.594 17.3913 15.0272C16.137 13.8005 14.4216 13.0435 12.5288 13.0435C8.68672 13.0435 5.57227 16.158 5.57227 19.9999C5.57227 23.8419 8.6868 26.9564 12.5288 26.9564C14.4217 26.9564 16.137 26.1993 17.3913 24.9727C16.5917 25.406 15.6759 25.6522 14.7027 25.6522V25.6522Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_306">
          <Rect width="40" height="40" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Turkey'

/**
 * Flags by Deji.Zeal: Turkey
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Turkey = memo(Icon)
