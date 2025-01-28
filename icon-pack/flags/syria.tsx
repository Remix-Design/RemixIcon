import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill="none" height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_403)">
        <Path
          d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.95431 0 0 8.9543 0 20C0 31.0457 8.95431 40 20 40Z"
          fill="#F0F0F0"
        />
        <Path
          d="M20.0002 0C11.4009 0 4.07 5.4275 1.24414 13.0435H38.7563C35.9303 5.4275 28.5995 0 20.0002 0V0Z"
          fill="#D80027"
        />
        <Path
          d="M20.0002 39.9998C28.5995 39.9998 35.9303 34.5723 38.7562 26.9563H1.24414C4.07 34.5723 11.4009 39.9998 20.0002 39.9998Z"
          fill="black"
        />
        <Path
          d="M11.9505 15.2173L13.0296 18.5385H16.522L13.6966 20.5915L14.7759 23.9129L11.9505 21.8602L9.12508 23.9129L10.2043 20.5915L7.37891 18.5385H10.8713L11.9505 15.2173Z"
          fill="#6DA544"
        />
        <Path
          d="M28.0501 15.2173L29.1292 18.5385H32.6217L29.7962 20.5915L30.8755 23.9129L28.0501 21.8602L25.2247 23.9129L26.3039 20.5915L23.4785 18.5385H26.9709L28.0501 15.2173Z"
          fill="#6DA544"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_403">
          <Rect width="40" height="40" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Syria'

/**
 * Flags by `Deji.Zeal`: Syria
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Syria = memo(Icon)
