import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_2088)">
        <Path
          d="M28.6958 1.98453C26.0664 0.713125 23.1166 0 20.0002 0C16.8838 0 13.9339 0.713125 11.3046 1.98453L9.56543 20L11.3046 38.0155C13.9339 39.2869 16.8838 40 20.0002 40C23.1166 40 26.0664 39.2869 28.6958 38.0155L30.435 20L28.6958 1.98453Z"
          fill={color}
        />
        <Path
          d="M11.3044 1.98523C4.61453 5.22007 0 12.0708 0 20C0 27.9292 4.61453 34.7799 11.3044 38.0148V1.98523Z"
          fill={color}
        />
        <Path
          d="M28.6953 1.98523V38.0148C35.3852 34.7799 39.9997 27.9291 39.9997 20C39.9997 12.0709 35.3852 5.22007 28.6953 1.98523Z"
          fill={color}
        />
        <Path
          d="M26.0866 12.1738L27.2533 12.7571L26.0866 12.1738L24.9199 11.5906C24.8496 11.7313 23.3262 14.8307 23.0774 19.5652H21.3041V12.1738L19.9997 10.4347L18.6953 12.1738V19.5652H16.922C16.673 14.8307 15.1498 11.7313 15.0794 11.5906L12.7461 12.7572C12.7622 12.7892 14.3476 16.0162 14.3476 20.8695V22.1739H18.6954V29.5652H21.3041V22.1739H25.6519V20.8695C25.6519 18.3602 26.086 16.2912 26.4503 14.9973C26.8474 13.5863 27.2508 12.7623 27.2548 12.7541L26.0866 12.1738Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_2088">
          <Rect width="40" height="40" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Barbados'

/**
 * Flags by `Deji.Zeal`: Barbados
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Barbados = memo(Icon)
