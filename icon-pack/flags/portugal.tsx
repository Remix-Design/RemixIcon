import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill="none" height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_749)">
        <Path
          d="M0 19.9999C0 28.5991 5.4275 35.93 13.0434 38.7558L14.7826 19.9998L13.0434 1.2439C5.4275 4.06983 0 11.4006 0 19.9999Z"
          fill="#6DA544"
        />
        <Path
          d="M39.9996 20C39.9996 8.95437 31.0452 0 19.9996 0C17.5532 0 15.2097 0.440078 13.043 1.24398V38.756C15.2097 39.56 17.5532 40 19.9996 40C31.0452 40 39.9996 31.0456 39.9996 20Z"
          fill="#D80027"
        />
        <Path
          d="M13.0434 26.9564C16.8854 26.9564 19.9999 23.8419 19.9999 19.9999C19.9999 16.158 16.8854 13.0435 13.0434 13.0435C9.20144 13.0435 6.08691 16.158 6.08691 19.9999C6.08691 23.8419 9.20144 26.9564 13.0434 26.9564Z"
          fill="#FFDA44"
        />
        <Path
          d="M9.12988 16.5217V20.8695C9.12988 23.0306 10.8818 24.7826 13.0429 24.7826C15.2041 24.7826 16.956 23.0307 16.956 20.8695V16.5217H9.12988Z"
          fill="#D80027"
        />
        <Path
          d="M13.0436 22.1741C12.3244 22.1741 11.7393 21.5889 11.7393 20.8697V19.1306H14.3479V20.8698C14.3479 21.5889 13.7628 22.1741 13.0436 22.1741Z"
          fill="#F0F0F0"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_749">
          <Rect width="40" height="40" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Portugal'

/**
 * Flags by `Deji.Zeal`: Portugal
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Portugal = memo(Icon)
