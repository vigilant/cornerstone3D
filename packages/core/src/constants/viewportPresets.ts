import type { ViewportPreset } from '../types';

const presets: ViewportPreset[] = [
  {
    name: 'CT-AAA',
    gradientOpacity: '4 0 1 255 1',
    specularPower: '10',
    scalarOpacity:
      '12 -3024 0 143.556 0 166.222 0.686275 214.389 0.696078 419.736 0.833333 3071 0.803922',
    specular: '0.2',
    shade: '1',
    ambient: '0.1',
    colorTransfer:
      '24 -3024 0 0 0 143.556 0.615686 0.356863 0.184314 166.222 0.882353 0.603922 0.290196 214.389 1 1 1 419.736 1 0.937033 0.954531 3071 0.827451 0.658824 1',
    diffuse: '0.9',
    interpolation: '1',
  },
  {
    name: 'CT-AAA2',
    gradientOpacity: '4 0 1 255 1',
    specularPower: '10',
    scalarOpacity:
      '16 -3024 0 129.542 0 145.244 0.166667 157.02 0.5 169.918 0.627451 395.575 0.8125 1578.73 0.8125 3071 0.8125',
    specular: '0.2',
    shade: '1',
    ambient: '0.1',
    colorTransfer:
      '32 -3024 0 0 0 129.542 0.54902 0.25098 0.14902 145.244 0.6 0.627451 0.843137 157.02 0.890196 0.47451 0.6 169.918 0.992157 0.870588 0.392157 395.575 1 0.886275 0.658824 1578.73 1 0.829256 0.957922 3071 0.827451 0.658824 1',
    diffuse: '0.9',
    interpolation: '1',
  },
  {
    name: 'CT-Bone',
    gradientOpacity: '4 0 1 255 1',
    specularPower: '10',
    scalarOpacity: '8 -3024 0 -16.4458 0 641.385 0.715686 3071 0.705882',
    specular: '0.2',
    shade: '1',
    ambient: '0.1',
    colorTransfer:
      '16 -3024 0 0 0 -16.4458 0.729412 0.254902 0.301961 641.385 0.905882 0.815686 0.552941 3071 1 1 1',
    diffuse: '0.9',
    interpolation: '1',
  },
  {
    name: 'CT-Bones',
    gradientOpacity: '4 0 1 985.12 1',
    specularPower: '1',
    scalarOpacity: '8 -1000 0 152.19 0 278.93 0.190476 952 0.2',
    specular: '0',
    shade: '1',
    ambient: '0.2',
    colorTransfer:
      '20 -1000 0.3 0.3 1 -488 0.3 1 0.3 463.28 1 0 0 659.15 1 0.912535 0.0374849 953 1 0.3 0.3',
    diffuse: '1',
    interpolation: '1',
  },
  {
    name: 'CT-Cardiac',
    gradientOpacity: '4 0 1 255 1',
    specularPower: '10',
    scalarOpacity:
      '12 -3024 0 -77.6875 0 94.9518 0.285714 179.052 0.553571 260.439 0.848214 3071 0.875',
    specular: '0.2',
    shade: '1',
    ambient: '0.1',
    colorTransfer:
      '24 -3024 0 0 0 -77.6875 0.54902 0.25098 0.14902 94.9518 0.882353 0.603922 0.290196 179.052 1 0.937033 0.954531 260.439 0.615686 0 0 3071 0.827451 0.658824 1',
    diffuse: '0.9',
    interpolation: '1',
  },
  {
    name: 'CT-Cardiac2',
    gradientOpacity: '4 0 1 255 1',
    specularPower: '10',
    scalarOpacity:
      '12 -3024 0 42.8964 0 163.488 0.428571 277.642 0.776786 1587 0.754902 3071 0.754902',
    specular: '0.2',
    shade: '1',
    ambient: '0.1',
    colorTransfer:
      '24 -3024 0 0 0 42.8964 0.54902 0.25098 0.14902 163.488 0.917647 0.639216 0.0588235 277.642 1 0.878431 0.623529 1587 1 1 1 3071 0.827451 0.658824 1',
    diffuse: '0.9',
    interpolation: '1',
  },
  {
    name: 'CT-Cardiac3',
    gradientOpacity: '4 0 1 255 1',
    specularPower: '10',
    scalarOpacity:
      '14 -3024 0 -86.9767 0 45.3791 0.169643 139.919 0.589286 347.907 0.607143 1224.16 0.607143 3071 0.616071',
    specular: '0.2',
    shade: '1',
    ambient: '0.1',
    colorTransfer:
      '28 -3024 0 0 0 -86.9767 0 0.25098 1 45.3791 1 0 0 139.919 1 0.894893 0.894893 347.907 1 1 0.25098 1224.16 1 1 1 3071 0.827451 0.658824 1',
    diffuse: '0.9',
    interpolation: '1',
  },
  {
    name: 'CT-Chest-Contrast-Enhanced',
    gradientOpacity: '4 0 1 255 1',
    specularPower: '10',
    scalarOpacity:
      '10 -3024 0 67.0106 0 251.105 0.446429 439.291 0.625 3071 0.616071',
    specular: '0.2',
    shade: '1',
    ambient: '0.1',
    colorTransfer:
      '20 -3024 0 0 0 67.0106 0.54902 0.25098 0.14902 251.105 0.882353 0.603922 0.290196 439.291 1 0.937033 0.954531 3071 0.827451 0.658824 1',
    diffuse: '0.9',
    interpolation: '1',
  },
  {
    name: 'CT-Chest-Vessels',
    gradientOpacity: '4 0 1 255 1',
    specularPower: '1',
    scalarOpacity:
      '10 -3024 0 -1278.35 0 22.8277 0.428571 439.291 0.625 3071 0.616071',
    specular: '0',
    shade: '1',
    ambient: '0.2',
    colorTransfer:
      '20 -3024 0 0 0 -1278.35 0.54902 0.25098 0.14902 22.8277 0.882353 0.603922 0.290196 439.291 1 0.937033 0.954531 3071 0.827451 0.658824 1',
    diffuse: '1',
    interpolation: '1',
  },
  {
    name: 'CT-Coronary-Arteries',
    gradientOpacity: '4 0 1 255 1',
    specularPower: '1',
    scalarOpacity:
      '12 -2048 0 136.47 0 159.215 0.258929 318.43 0.571429 478.693 0.776786 3661 1',
    specular: '0',
    shade: '0',
    ambient: '0.2',
    colorTransfer:
      '24 -2048 0 0 0 136.47 0 0 0 159.215 0.159804 0.159804 0.159804 318.43 0.764706 0.764706 0.764706 478.693 1 1 1 3661 1 1 1',
    diffuse: '1',
    interpolation: '1',
  },
  {
    name: 'CT-Coronary-Arteries-2',
    gradientOpacity: '4 0 1 255 1',
    specularPower: '1',
    scalarOpacity:
      '14 -2048 0 142.677 0 145.016 0.116071 192.174 0.5625 217.24 0.776786 384.347 0.830357 3661 0.830357',
    specular: '0',
    shade: '1',
    ambient: '0.2',
    colorTransfer:
      '28 -2048 0 0 0 142.677 0 0 0 145.016 0.615686 0 0.0156863 192.174 0.909804 0.454902 0 217.24 0.972549 0.807843 0.611765 384.347 0.909804 0.909804 1 3661 1 1 1',
    diffuse: '1',
    interpolation: '1',
  },
  {
    name: 'CT-Coronary-Arteries-3',
    gradientOpacity: '4 0 1 255 1',
    specularPower: '10',
    scalarOpacity:
      '14 -2048 0 128.643 0 129.982 0.0982143 173.636 0.669643 255.884 0.857143 584.878 0.866071 3661 1',
    specular: '0.2',
    shade: '1',
    ambient: '0.1',
    colorTransfer:
      '28 -2048 0 0 0 128.643 0 0 0 129.982 0.615686 0 0.0156863 173.636 0.909804 0.454902 0 255.884 0.886275 0.886275 0.886275 584.878 0.968627 0.968627 0.968627 3661 1 1 1',
    diffuse: '0.9',
    interpolation: '1',
  },
  {
    name: 'CT-Cropped-Volume-Bone',
    gradientOpacity: '4 0 1 255 1',
    specularPower: '1',
    scalarOpacity: '10 -2048 0 -451 0 -450 1 1050 1 3661 1',
    specular: '0',
    shade: '0',
    ambient: '0.2',
    colorTransfer:
      '20 -2048 0 0 0 -451 0 0 0 -450 0.0556356 0.0556356 0.0556356 1050 1 1 1 3661 1 1 1',
    diffuse: '1',
    interpolation: '1',
  },
  {
    name: 'CT-Fat',
    gradientOpacity: '6 0 1 985.12 1 988 1',
    specularPower: '1',
    scalarOpacity: '14 -1000 0 -100 0 -99 0.15 -60 0.15 -59 0 101.2 0 952 0',
    specular: '0',
    shade: '0',
    ambient: '0.2',
    colorTransfer:
      '36 -1000 0.3 0.3 1 -497.5 0.3 1 0.3 -99 0 0 1 -76.946 0 1 0 -65.481 0.835431 0.888889 0.0165387 83.89 1 0 0 463.28 1 0 0 659.15 1 0.912535 0.0374849 2952 1 0.300267 0.299886',
    diffuse: '1',
    interpolation: '1',
  },
  {
    name: 'CT-Liver-Vasculature',
    gradientOpacity: '4 0 1 255 1',
    specularPower: '1',
    scalarOpacity:
      '14 -2048 0 149.113 0 157.884 0.482143 339.96 0.660714 388.526 0.830357 1197.95 0.839286 3661 0.848214',
    specular: '0',
    shade: '0',
    ambient: '0.2',
    colorTransfer:
      '28 -2048 0 0 0 149.113 0 0 0 157.884 0.501961 0.25098 0 339.96 0.695386 0.59603 0.36886 388.526 0.854902 0.85098 0.827451 1197.95 1 1 1 3661 1 1 1',
    diffuse: '1',
    interpolation: '1',
  },
  {
    name: 'CT-Lung',
    gradientOpacity: '6 0 1 985.12 1 988 1',
    specularPower: '1',
    scalarOpacity: '12 -1000 0 -600 0 -599 0.15 -400 0.15 -399 0 2952 0',
    specular: '0',
    shade: '1',
    ambient: '0.2',
    colorTransfer:
      '24 -1000 0.3 0.3 1 -600 0 0 1 -530 0.134704 0.781726 0.0724558 -460 0.929244 1 0.109473 -400 0.888889 0.254949 0.0240258 2952 1 0.3 0.3',
    diffuse: '1',
    interpolation: '1',
  },
  {
    name: 'CT-MIP',
    gradientOpacity: '4 0 1 255 1',
    specularPower: '10',
    scalarOpacity: '8 -3024 0 -637.62 0 700 1 3071 1',
    specular: '0.2',
    shade: '1',
    ambient: '0.1',
    colorTransfer: '16 -3024 0 0 0 -637.62 1 1 1 700 1 1 1 3071 1 1 1',
    diffuse: '0.9',
    interpolation: '1',
  },
  {
    name: 'CT-Muscle',
    gradientOpacity: '4 0 1 255 1',
    specularPower: '10',
    scalarOpacity:
      '10 -3024 0 -155.407 0 217.641 0.676471 419.736 0.833333 3071 0.803922',
    specular: '0.2',
    shade: '1',
    ambient: '0.1',
    colorTransfer:
      '20 -3024 0 0 0 -155.407 0.54902 0.25098 0.14902 217.641 0.882353 0.603922 0.290196 419.736 1 0.937033 0.954531 3071 0.827451 0.658824 1',
    diffuse: '0.9',
    interpolation: '1',
  },
  {
    name: 'CT-Pulmonary-Arteries',
    gradientOpacity: '4 0 1 255 1',
    specularPower: '1',
    scalarOpacity:
      '14 -2048 0 -568.625 0 -364.081 0.0714286 -244.813 0.401786 18.2775 0.607143 447.798 0.830357 3592.73 0.839286',
    specular: '0',
    shade: '1',
    ambient: '0.2',
    colorTransfer:
      '28 -2048 0 0 0 -568.625 0 0 0 -364.081 0.396078 0.301961 0.180392 -244.813 0.611765 0.352941 0.0705882 18.2775 0.843137 0.0156863 0.156863 447.798 0.752941 0.752941 0.752941 3592.73 1 1 1',
    diffuse: '1',
    interpolation: '1',
  },
  {
    name: 'CT-Soft-Tissue',
    gradientOpacity: '4 0 1 255 1',
    specularPower: '1',
    scalarOpacity: '10 -2048 0 -167.01 0 -160 1 240 1 3661 1',
    specular: '0',
    shade: '0',
    ambient: '0.2',
    colorTransfer:
      '20 -2048 0 0 0 -167.01 0 0 0 -160 0.0556356 0.0556356 0.0556356 240 1 1 1 3661 1 1 1',
    diffuse: '1',
    interpolation: '1',
  },
  {
    name: 'CT-Air',
    gradientOpacity: '4 0 1 255 1',
    specularPower: '10',
    scalarOpacity: '8 -3024 0.705882 -900.0 0.715686 -500.0 0 3071 0',
    specular: '0.2',
    shade: '1',
    ambient: '0.1',
    colorTransfer:
      '16 -3024 1 1 1 -900.0 0.2 1.0 1.0 -500.0 0.3 0.3 1.0 3071 0 0 0 ',
    diffuse: '0.9',
    interpolation: '1',
  },
  {
    name: 'MR-Angio',
    gradientOpacity: '4 0 1 255 1',
    specularPower: '1',
    scalarOpacity:
      '12 -2048 0 151.354 0 158.279 0.4375 190.112 0.580357 200.873 0.732143 3661 0.741071',
    specular: '0',
    shade: '1',
    ambient: '0.2',
    colorTransfer:
      '24 -2048 0 0 0 151.354 0 0 0 158.279 0.74902 0.376471 0 190.112 1 0.866667 0.733333 200.873 0.937255 0.937255 0.937255 3661 1 1 1',
    diffuse: '1',
    interpolation: '1',
  },
  {
    name: 'MR-Default',
    gradientOpacity: '4 0 1 255 1',
    specularPower: '1',
    scalarOpacity: '12 0 0 20 0 40 0.15 120 0.3 220 0.375 1024 0.5',
    specular: '0',
    shade: '1',
    ambient: '0.2',
    colorTransfer:
      '24 0 0 0 0 20 0.168627 0 0 40 0.403922 0.145098 0.0784314 120 0.780392 0.607843 0.380392 220 0.847059 0.835294 0.788235 1024 1 1 1',
    diffuse: '1',
    interpolation: '1',
  },
  {
    name: 'MR-MIP',
    gradientOpacity: '4 0 1 255 1',
    specularPower: '1',
    scalarOpacity: '8 0 0 98.3725 0 416.637 1 2800 1',
    specular: '0',
    shade: '0',
    ambient: '0.2',
    colorTransfer: '16 0 1 1 1 98.3725 1 1 1 416.637 1 1 1 2800 1 1 1',
    diffuse: '1',
    interpolation: '1',
  },
  {
    name: 'MR-T2-Brain',
    gradientOpacity: '4 0 1 160.25 1',
    specularPower: '40',
    scalarOpacity: '10 0 0 36.05 0 218.302 0.171429 412.406 1 641 1',
    specular: '0.5',
    shade: '1',
    ambient: '0.3',
    colorTransfer:
      '16 0 0 0 0 98.7223 0.956863 0.839216 0.192157 412.406 0 0.592157 0.807843 641 1 1 1',
    diffuse: '0.6',
    interpolation: '1',
  },
  {
    name: 'DTI-FA-Brain',
    gradientOpacity: '4 0 1 0.9950 1',
    specularPower: '40',
    scalarOpacity:
      '16 0 0 0 0 0.3501 0.0158 0.49379 0.7619 0.6419 1 0.9920 1 0.9950 0 0.9950 0',
    specular: '0.5',
    shade: '1',
    ambient: '0.3',
    colorTransfer:
      '28 0 1 0 0 0 1 0 0 0.24974 0.4941 1 0 0.49949 0 0.9882 1 0.7492 0.51764 0 1 0.9950 1 0 0 0.9950 1 0 0',
    diffuse: '0.9',
    interpolation: '1',
  },
];

export default presets;
