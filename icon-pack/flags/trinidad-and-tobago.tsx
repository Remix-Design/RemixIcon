import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_325)">
        <Path
          d="M10.8292 2.2207C9.03875 3.14484 7.35805 4.35617 5.85711 5.85711C4.35609 7.35812 3.14477 9.03883 2.2207 10.8293L15.0806 24.9191L29.1704 37.779C30.9609 36.8548 32.6416 35.6435 34.1426 34.1427C35.6436 32.6416 36.8548 30.9609 37.779 29.1705L24.9191 15.0806L10.8292 2.2207Z"
          fill={color}
        />
        <Path
          d="M34.1427 34.1426C34.9817 33.3036 35.73 32.4083 36.3888 31.4694L8.53055 3.61108C7.59156 4.26976 6.69633 5.01804 5.85734 5.85702C5.01836 6.69601 4.27008 7.59124 3.61133 8.5303L31.4695 36.3884C32.4084 35.7298 33.3038 34.9816 34.1427 34.1426Z"
          fill={color}
        />
        <Path
          d="M5.85718 34.1425C12.1671 40.4524 21.6434 41.6636 29.1705 37.7788L2.22085 10.8291C-1.66391 18.3561 -0.452428 27.8325 5.85718 34.1425V34.1425Z"
          fill={color}
        />
        <Path
          d="M34.1434 5.85704C27.8334 -0.452806 18.3571 -1.66406 10.8301 2.22055L37.7797 29.1704C41.6645 21.6434 40.4533 12.1669 34.1434 5.85704V5.85704Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_325">
          <Rect width="40" height="40" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'TrinidadAndTobago'

/**
 * Flags by Deji.Zeal: Trinidad And Tobago
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const TrinidadAndTobago = memo(Icon)
