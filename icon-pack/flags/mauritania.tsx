import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill="none" height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_1079)">
        <Path
          d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.95431 0 0 8.9543 0 20C0 31.0457 8.95431 40 20 40Z"
          fill="#496E2D"
        />
        <Path
          d="M19.9995 23.1056C16.6693 23.1056 13.8873 20.7651 13.2047 17.6397C13.0998 18.1202 13.043 18.6184 13.043 19.1304C13.043 22.9725 16.1574 26.0869 19.9995 26.0869C23.8415 26.0869 26.9559 22.9725 26.9559 19.1304C26.9559 18.6184 26.8991 18.1202 26.7942 17.6396C26.1116 20.7652 23.3296 23.1056 19.9995 23.1056Z"
          fill="#FFDA44"
        />
        <Path
          d="M19.9997 13.9131L20.6472 15.906H22.7428L21.0475 17.1376L21.695 19.1305L19.9997 17.8988L18.3045 19.1305L18.9521 17.1376L17.2568 15.906H19.3522L19.9997 13.9131Z"
          fill="#FFDA44"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_1079">
          <Rect width="40" height="40" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Mauritania'

/**
 * Flags by `Deji.Zeal`: Mauritania
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Mauritania = memo(Icon)
