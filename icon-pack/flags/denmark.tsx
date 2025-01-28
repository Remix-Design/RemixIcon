import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_1771)">
        <Path
          d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z"
          fill={color}
        />
        <Path
          d="M15.6524 17.3913H39.8309C38.5525 7.57828 30.1616 0 20.0002 0C18.5068 0 17.0523 0.165078 15.6523 0.475391V17.3913H15.6524Z"
          fill={color}
        />
        <Path
          d="M10.4344 17.3912V2.43176C4.94277 5.42817 1.01137 10.9243 0.168945 17.3913H10.4344V17.3912Z"
          fill={color}
        />
        <Path
          d="M10.4343 22.6088H0.168945C1.01137 29.0757 4.94277 34.5719 10.4344 37.5682L10.4343 22.6088Z"
          fill={color}
        />
        <Path
          d="M15.6523 22.6088V39.5247C17.0523 39.835 18.5068 40.0001 20.0002 40.0001C30.1616 40.0001 38.5525 32.4218 39.8309 22.6088H15.6523V22.6088Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_1771">
          <Rect width="40" height="40" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Denmark'

/**
 * Flags by `Deji.Zeal`: Denmark
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Denmark = memo(Icon)
