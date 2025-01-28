import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill="none" height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_1392)">
        <Path
          d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z"
          fill="#F0F0F0"
        />
        <Path
          d="M20.0002 0C11.4009 0 4.07 5.4275 1.24414 13.0435H38.7562C35.9303 5.4275 28.5994 0 20.0002 0V0Z"
          fill="#A2001D"
        />
        <Path
          d="M20.0002 40.0001C28.5995 40.0001 35.9303 34.5726 38.7562 26.9565H1.24414C4.07 34.5726 11.4009 40.0001 20.0002 40.0001Z"
          fill="black"
        />
        <Path
          d="M15.217 18.6958C15.2061 18.6958 15.1953 18.6965 15.1844 18.6966V18.6958H11.3612C11.555 17.9469 12.2346 17.3914 13.0431 17.3914V14.7827C10.6457 14.7827 8.69527 16.7332 8.69527 19.1305V21.261V21.3045H15.1844H15.217C15.4568 21.3045 15.6518 21.4996 15.6518 21.7393V22.6088H6.95605V25.2175H18.2604V21.7392C18.2604 20.0611 16.8951 18.6958 15.217 18.6958V18.6958Z"
          fill="#496E2D"
        />
        <Path
          d="M21.7386 22.6088V14.7827H19.1299V25.2176H23.4777V22.6088H21.7386Z"
          fill="#496E2D"
        />
        <Path
          d="M30.4346 22.6089V14.7827H27.8259V22.6089H26.9563V20.0002H24.3477V25.2176H32.1737V22.6089H30.4346Z"
          fill="#496E2D"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_1392">
          <Rect width="40" height="40" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Iraq'

/**
 * Flags by `Deji.Zeal`: Iraq
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Iraq = memo(Icon)
