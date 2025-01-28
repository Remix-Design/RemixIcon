import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill="none" height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_1972)">
        <Path
          d="M0 20C0 8.95437 8.95438 0 20 0C31.0456 0 40 8.95437 40 20C39.1305 20 20 22.6087 20 22.6087L0 20Z"
          fill="#D80027"
        />
        <Path
          d="M40 20C40 31.0456 31.0456 40 20 40C8.95437 40 0 31.0456 0 20"
          fill="#6DA544"
        />
        <Path
          d="M19.9998 13.0435L21.5105 17.6933H26.4002L22.4445 20.5672L23.9553 25.2174L19.9998 22.3435L16.0443 25.2174L17.5553 20.5672L13.5996 17.6933H18.489L19.9998 13.0435Z"
          fill="#FFDA44"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_1972">
          <Rect width="40" height="40" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'BurkinaFaso'

/**
 * Flags by `Deji.Zeal`: Burkina Faso
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const BurkinaFaso = memo(Icon)
