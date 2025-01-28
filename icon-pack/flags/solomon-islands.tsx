import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_546)">
        <Path
          d="M34.1429 34.1427C41.6438 26.6418 41.9399 14.6665 35.0346 6.8103L20.0002 19.9999L6.81055 35.0343C14.6667 41.9397 26.642 41.6435 34.1429 34.1427V34.1427Z"
          fill={color}
        />
        <Path
          d="M5.85729 5.85758C13.3581 -1.64327 25.3335 -1.93944 33.1897 4.96594L19.9999 20.0004L4.96573 33.1899C-1.93972 25.3338 -1.64347 13.3584 5.85729 5.85758V5.85758Z"
          fill={color}
        />
        <Path
          d="M33.1888 4.96582L4.96484 33.1898C5.25016 33.5144 5.5464 33.8329 5.85648 34.1428C6.16648 34.4528 6.485 34.749 6.80968 35.0345L35.0335 6.8105C34.7481 6.48582 34.4518 6.16738 34.1417 5.8573C33.8319 5.54746 33.5134 5.25113 33.1888 4.96582V4.96582Z"
          fill={color}
        />
        <Path
          d="M8.42633 6.95605L8.85812 8.28472H10.2551L9.12492 9.10574L9.55656 10.4344L8.42633 9.61324L7.29609 10.4344L7.72789 9.10574L6.59766 8.28472H7.99469L8.42633 6.95605Z"
          fill={color}
        />
        <Path
          d="M15.563 6.95605L15.9948 8.28472H17.3917L16.2616 9.10574L16.6933 10.4344L15.563 9.61324L14.4328 10.4344L14.8646 9.10574L13.7344 8.28472H15.1313L15.563 6.95605Z"
          fill={color}
        />
        <Path
          d="M8.42633 13.9128L8.85812 15.2415H10.2551L9.12492 16.0626L9.55656 17.3913L8.42633 16.5701L7.29609 17.3913L7.72789 16.0626L6.59766 15.2415H7.99469L8.42633 13.9128Z"
          fill={color}
        />
        <Path
          d="M15.563 13.9128L15.9948 15.2415H17.3917L16.2616 16.0626L16.6933 17.3913L15.563 16.5701L14.4328 17.3913L14.8646 16.0626L13.7344 15.2415H15.1313L15.563 13.9128Z"
          fill={color}
        />
        <Path
          d="M11.9948 10.4343L12.4266 11.763H13.8234L12.6933 12.5841L13.125 13.9128L11.9948 13.0916L10.8645 13.9128L11.2962 12.5841L10.166 11.763H11.563L11.9948 10.4343Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_546">
          <Rect width="40" height="40" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'SolomonIslands'

/**
 * Flags by Deji.Zeal: Solomon Islands
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const SolomonIslands = memo(Icon)
