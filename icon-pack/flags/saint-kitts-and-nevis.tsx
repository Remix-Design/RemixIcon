import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Mask, Path, Rect } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill="none" height={size} width={size} {...otherProps}>
      <Mask
        id="mask0_51_699"
        style={{
          maskType: 'alpha',
        }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="40"
        height="40"
      >
        <Path
          d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z"
          fill="#D80027"
        />
      </Mask>
      <G mask="url(#mask0_51_699)">
        <Rect
          x="-9.80078"
          y="-0.60022"
          width="59.5"
          height="42.5"
          rx="21.25"
          fill="white"
        />
        <Mask
          id="mask1_51_699"
          style={{
            maskType: 'luminance',
          }}
          maskUnits="userSpaceOnUse"
          x="-10"
          y="-1"
          width="60"
          height="43"
        >
          <Rect
            x="-9.80078"
            y="-0.60022"
            width="59.5"
            height="42.5"
            rx="21.25"
            fill="white"
          />
        </Mask>
        <G mask="url(#mask1_51_699)">
          <Path
            d="M-9.80078 27.7331L49.6992 -0.60022H-9.80078V27.7331Z"
            fill="#1EC160"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <Path
            d="M-9.80078 41.9003H49.6992V13.567L-9.80078 41.9003Z"
            fill="#DF2A40"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <Path
            d="M-8.13549 53.2342L61.5458 9.69249L48.0329 -11.9327L-21.6484 31.609L-8.13549 53.2342V53.2342Z"
            fill="#FFD956"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <Path
            d="M-11.1373 48.4275L58.544 4.88584L51.0368 -7.12817L-18.6445 36.4135L-11.1373 48.4275V48.4275Z"
            fill="#262626"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <Path
            d="M33.356 15.9702L31.347 19.1521L30.0435 15.6221L26.3965 14.6947L29.3509 12.3641L29.106 8.60901L32.2355 10.6987L35.7311 9.30533L34.7107 12.9274L37.1161 15.8213L33.356 15.9702V15.9702Z"
            fill="white"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <Path
            d="M10.69 29.7113L8.68098 32.8932L7.37744 29.3632L3.73047 28.4357L6.68493 26.1052L6.43997 22.3501L9.56947 24.4398L13.065 23.0464L12.0447 26.6685L14.4501 29.5624L10.69 29.7113V29.7113Z"
            fill="white"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </G>
      </G>
    </Svg>
  )
}

Icon.displayName = 'SaintKittsAndNevis'

/**
 * Flags by `Deji.Zeal`: Saint Kitts And Nevis
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const SaintKittsAndNevis = memo(Icon)
