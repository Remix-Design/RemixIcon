import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_2123)">
        <Path
          d="M40 20C40 17.5536 39.56 15.2101 38.756 13.0436L20 12.174L1.24398 13.0435C0.440078 15.2101 0 17.5536 0 20C0 22.4464 0.440078 24.79 1.24398 26.9565L20 27.8261L38.756 26.9566C39.56 24.79 40 22.4464 40 20Z"
          fill={color}
        />
        <Path
          d="M20.0002 39.9999C28.5995 39.9999 35.9303 34.5724 38.7562 26.9564H1.24414C4.07 34.5724 11.4009 39.9999 20.0002 39.9999Z"
          fill={color}
        />
        <Path
          d="M1.24414 13.0435H38.7563C35.9303 5.4275 28.5995 0 20.0002 0C11.4009 0 4.07 5.4275 1.24414 13.0435V13.0435Z"
          fill={color}
        />
        <Path
          d="M20.4351 25.6522C17.3135 25.6522 14.7829 23.1216 14.7829 20C14.7829 16.8785 17.3135 14.3478 20.4351 14.3478C21.4084 14.3478 22.3242 14.5939 23.1237 15.0272C21.8694 13.8006 20.1541 13.0435 18.2612 13.0435C14.4191 13.0435 11.3047 16.158 11.3047 19.9999C11.3047 23.8419 14.4192 26.9564 18.2612 26.9564C20.1541 26.9564 21.8694 26.1993 23.1237 24.9727C22.3242 25.4061 21.4084 25.6522 20.4351 25.6522Z"
          fill={color}
        />
        <Path
          d="M24.7832 16.087L25.5318 18.1926L27.5501 17.2331L26.5907 19.2513L28.6962 20.0001L26.5907 20.7488L27.5501 22.7671L25.5318 21.8076L24.7832 23.9131L24.0346 21.8076L22.0162 22.7671L22.9757 20.7488L20.8701 20.0001L22.9757 19.2513L22.0162 17.2331L24.0346 18.1926L24.7832 16.087Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_2123">
          <Rect width="40" height="40" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Azerbaijan'

/**
 * Flags by `Deji.Zeal`: Azerbaijan
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Azerbaijan = memo(Icon)
