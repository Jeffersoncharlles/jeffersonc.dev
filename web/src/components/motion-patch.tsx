
'use client'

import { motion } from 'framer-motion'

export default function MotionPatch() {


  const icon = {
    hidden: {
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)"
    },
    visible: {
      pathLength: 1,
      fill: "rgba(255, 255, 255, 0.1)"
    }
  }

  const transition = { duration: 6, ease: 'easeInOut' }

  return (
    <svg viewBox="0 0 632 632" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_f_202_235)">
        <motion.path
          transition={transition}
          variants={icon}
          initial="hidden"
          animate="visible"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M315.144 4.85455H210.515V45.5413H315.144V4.85455ZM316.856 4.85455V45.5413H424.834V4.85455H316.856ZM319.72 47.254H424.834V70.5358C392.649 56.1337 357.114 47.8758 319.72 47.254ZM426.547 47.254V71.3094C455.744 84.6216 482.142 103.006 504.614 125.336L582.696 47.254H426.547ZM316.856 48.9341C355.322 49.1731 391.859 57.5438 424.834 72.4138V204.615H316.856V48.9341ZM315.144 204.615V48.9289C278.01 48.9314 242.646 56.5126 210.515 70.21V204.615H315.144ZM210.515 206.328H315.144V313.932L210.515 209.304V206.328ZM208.802 204.615V70.9473C178.26 84.222 150.683 103.04 127.342 126.13L205.826 204.615H208.802ZM207.539 206.328H208.802V207.591L207.539 206.328ZM203.404 204.615L126.128 127.339C103.934 149.576 85.6393 175.706 72.3556 204.615H203.404ZM71.5759 206.328H205.117L208.802 210.013V314.306H48.0961C48.3351 275.84 56.7058 239.303 71.5759 206.328ZM70.4715 204.615C83.8668 175.236 102.398 148.691 124.917 126.128L47.254 48.465V204.615H70.4715ZM47.254 206.328H69.6979C57.5346 233.51 49.7538 263.081 47.254 294.143V206.328ZM45.5413 204.615V47.254V45.5413H47.254H208.802V4.85455H97.8837C46.5051 4.85455 4.85455 46.5052 4.85455 97.8837V204.615H45.5413ZM4.85455 206.328H45.5413V314.306H4.85455V206.328ZM316.856 206.328H423.623L316.856 313.094V206.328ZM426.547 206.328V314.306H582.228C581.989 275.84 573.619 239.303 558.748 206.328H426.547ZM560.627 206.328C575.03 238.517 583.288 274.057 583.909 311.455V206.328H560.627ZM583.909 204.615H559.853C546.541 175.418 528.156 149.02 505.825 126.547L583.909 48.4641V204.615ZM585.621 206.328V314.306H627.145V206.328H585.621ZM627.145 204.615H585.621V47.254V45.5413H583.909H426.547V4.85455H534.116C585.495 4.85455 627.145 46.5051 627.145 97.8837V204.615ZM557.969 204.615H427.757L504.614 127.758C526.62 149.904 544.768 175.887 557.969 204.615ZM426.547 73.1935V203.404L503.403 126.547C481.257 104.542 455.275 86.3936 426.547 73.1935ZM424.834 314.306H318.066L424.834 207.538V314.306ZM424.834 420.648V316.019H317.23L421.859 420.648H424.834ZM582.234 316.019H426.547V420.648H560.952C574.65 388.517 582.231 353.153 582.234 316.019ZM585.621 420.648V316.019H627.145V420.648H585.621ZM210.515 211.726L313.095 314.306H210.515V211.726ZM313.932 316.019H210.515V419.435L313.932 316.019ZM208.802 316.019H48.0909C48.0934 353.153 55.6747 388.517 69.3723 420.648H208.802V316.019ZM45.5413 316.019H4.85455V420.648H45.5413V316.019ZM419.437 420.648L316.856 318.067V420.648H419.437ZM316.856 422.36H421.15L424.834 426.045V559.586C391.859 574.456 355.322 582.827 316.856 583.066V422.36ZM315.144 420.648V317.229L211.725 420.648H315.144ZM210.515 422.36H315.144V583.071C278.01 583.069 242.646 575.488 210.515 561.79V422.36ZM70.1095 422.36H207.59L125.709 504.241C102.428 480.811 83.464 453.087 70.1095 422.36ZM67.511 420.648C56.6007 394.86 49.6006 367.016 47.254 337.857V420.648H67.511ZM47.254 422.36H68.2427C81.6987 453.557 100.894 481.698 124.498 505.452L47.254 582.696V422.36ZM4.85455 422.36H45.5413V583.909V585.621H47.254H208.802V626.651H210.515V585.621H315.144V626.651H316.856V585.621H424.834V626.651H426.547V585.621H583.909H585.621V583.909V422.36H627.145V534.116C627.145 585.495 585.495 627.145 534.116 627.145H97.8837C46.5052 627.145 4.85455 585.495 4.85455 534.116V422.36ZM583.909 420.648V320.546C583.321 356.008 575.865 389.8 562.813 420.648H583.909ZM426.547 422.36H560.215C546.94 452.903 528.123 480.48 505.032 503.821L426.547 425.336V422.36ZM424.834 422.36V423.623L423.572 422.36H424.834ZM562.082 422.36H583.909V582.697L506.243 505.032C529.656 481.366 548.705 453.373 562.082 422.36ZM426.547 427.758V558.807C455.457 545.523 481.586 527.228 503.824 505.034L426.547 427.758ZM337.017 583.909C368.08 581.409 397.652 573.628 424.834 561.465V583.909H337.017ZM426.547 560.691V583.909H582.698L505.035 506.246C482.471 528.765 455.926 547.296 426.547 560.691ZM48.4652 47.254H208.802V69.0804C177.789 82.4572 149.796 101.506 126.131 124.919L48.4652 47.254ZM210.515 47.254V68.3488C241.359 55.2992 275.146 47.8436 310.604 47.254H210.515ZM126.92 505.452L208.802 423.57V561.053C178.076 547.698 150.351 528.734 126.92 505.452ZM125.709 506.663C149.464 530.268 177.605 549.464 208.802 562.92V583.909H48.4641L125.709 506.663ZM210.515 563.652V583.909H293.307C264.149 581.562 236.303 574.562 210.515 563.652ZM97.8837 2C44.9286 2 2 44.9286 2 97.8837V534.116C2 587.071 44.9286 630 97.8837 630H534.116C587.071 630 630 587.071 630 534.116V97.8837C630 44.9286 587.071 2 534.116 2H97.8837Z"
          fill="url(#paint0_linear_202_235)"
        />
      </g>
      <defs>
        <filter id="filter0_f_202_235" x="0.858182" y="0.858182" width="630.284" height="630.284" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="0.570909" result="effect1_foregroundBlur_202_235" />
        </filter>
        <linearGradient id="paint0_linear_202_235" x1="45.5413" y1="51.4027" x2="508.587" y2="508.587" gradientUnits="userSpaceOnUse">
          <stop stopColor="#444444" />
          <stop offset="0.711492" stopColor="#2E2E2E" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  )
}