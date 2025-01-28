import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill="none" height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_344)">
        <Path
          d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z"
          fill="#FFDA44"
        />
        <Path
          d="M20.0004 -0.000244141C19.9859 -8.78906e-05 19.1309 7.99976 19.1309 7.99976H36.0013C32.3525 3.14218 26.5435 -0.000244141 20.0004 -0.000244141Z"
          fill="#496E2D"
        />
        <Path
          d="M20.0009 39.9998C26.544 39.9998 32.353 36.8573 36.0017 31.9998H4C7.64875 36.8573 13.4577 39.9998 20.0009 39.9998Z"
          fill="#496E2D"
        />
        <Path
          d="M39.5999 15.9998H19.1309L20.0004 23.9998H39.5999C39.8624 22.7073 40.0004 21.3697 40.0004 19.9998C40.0004 18.6298 39.8623 17.2922 39.5999 15.9998V15.9998Z"
          fill="#496E2D"
        />
        <Path
          d="M20 24C20 19.8261 20 4.69562 20 0C8.95437 0 0 8.95437 0 20C0 21.3699 0.138125 22.7076 0.400469 24H20Z"
          fill="#D80027"
        />
        <Path
          d="M11.0346 9.56519L12.3296 13.5507H16.5206L13.1302 16.0142L14.4251 20L11.0346 17.5367L7.64414 20L8.93922 16.0142L5.54883 13.5507H9.73969L11.0346 9.56519Z"
          fill="#F0F0F0"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_344">
          <Rect width="40" height="40" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Togo'

/**
 * Flags by `Deji.Zeal`: Togo
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Togo = memo(Icon)
