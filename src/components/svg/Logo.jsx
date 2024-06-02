import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContextAPI'

export default function Logo() {
  const {theme} = useContext(ThemeContext)
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="220" height="56" viewBox="0 0 220 56" fill="none">
    <g clipPath="url(#clip0_330_1193)">
    <g clipPath="url(#clip1_330_1193)">
    <path d="M17.9986 15.5347L35.5997 10.3491L30.464 28.0001L35.5997 45.6012L17.9986 40.4655L0.347656 45.6012L5.53325 28.0001L0.347656 10.3491L17.9986 15.5347Z" fill={theme=== "light" ? "black" : "white"}/>
    </g>
    <path d="M48.9199 41V13H60.0399C61.7466 13 63.2666 13.3467 64.5999 14.04C65.9599 14.7067 67.0133 15.6667 67.7599 16.92C68.5333 18.1467 68.9199 19.6267 68.9199 21.36V21.88C68.9199 23.6133 68.5199 25.1067 67.7199 26.36C66.9466 27.6133 65.8933 28.5733 64.5599 29.24C63.2266 29.9067 61.7199 30.24 60.0399 30.24H53.2399V41H48.9199ZM53.2399 26.32H59.5999C61.1199 26.32 62.3333 25.92 63.2399 25.12C64.1466 24.32 64.5999 23.2267 64.5999 21.84V21.44C64.5999 20.0267 64.1466 18.92 63.2399 18.12C62.3333 17.32 61.1199 16.92 59.5999 16.92H53.2399V26.32Z"fill={theme=== "light" ? "black" : "white"}/>
    <path d="M81.8346 41.56C79.8613 41.56 78.1013 41.16 76.5546 40.36C75.0346 39.5333 73.8346 38.36 72.9546 36.84C72.0746 35.32 71.6346 33.52 71.6346 31.44V30.84C71.6346 28.76 72.0746 26.9733 72.9546 25.48C73.8346 23.96 75.0346 22.7867 76.5546 21.96C78.1013 21.1333 79.8613 20.72 81.8346 20.72C83.8079 20.72 85.5679 21.1333 87.1146 21.96C88.6613 22.7867 89.8746 23.96 90.7546 25.48C91.6346 26.9733 92.0746 28.76 92.0746 30.84V31.44C92.0746 33.52 91.6346 35.32 90.7546 36.84C89.8746 38.36 88.6613 39.5333 87.1146 40.36C85.5679 41.16 83.8079 41.56 81.8346 41.56ZM81.8346 37.88C83.6479 37.88 85.1146 37.3067 86.2346 36.16C87.3813 34.9867 87.9546 33.3733 87.9546 31.32V30.96C87.9546 28.9067 87.3946 27.3067 86.2746 26.16C85.1546 24.9867 83.6746 24.4 81.8346 24.4C80.0479 24.4 78.5813 24.9867 77.4346 26.16C76.3146 27.3067 75.7546 28.9067 75.7546 30.96V31.32C75.7546 33.3733 76.3146 34.9867 77.4346 36.16C78.5813 37.3067 80.0479 37.88 81.8346 37.88Z" fill={theme=== "light" ? "black" : "white"}/>
    <path d="M105.284 41.56C102.777 41.56 100.697 41 99.044 39.88C97.3907 38.76 96.3773 37.0667 96.004 34.8L99.844 33.88C100.057 34.9733 100.417 35.84 100.924 36.48C101.431 37.12 102.057 37.5733 102.804 37.84C103.577 38.1067 104.404 38.24 105.284 38.24C106.591 38.24 107.591 37.9867 108.284 37.48C109.004 36.9733 109.364 36.32 109.364 35.52C109.364 34.72 109.031 34.1333 108.364 33.76C107.697 33.3867 106.711 33.08 105.404 32.84L104.044 32.6C102.711 32.36 101.497 32.0133 100.404 31.56C99.3106 31.1067 98.444 30.48 97.804 29.68C97.164 28.88 96.844 27.8533 96.844 26.6C96.844 24.7333 97.5373 23.2933 98.924 22.28C100.311 21.24 102.151 20.72 104.444 20.72C106.657 20.72 108.471 21.2267 109.884 22.24C111.324 23.2267 112.257 24.5733 112.684 26.28L108.844 27.36C108.604 26.16 108.097 25.32 107.324 24.84C106.551 24.3333 105.591 24.08 104.444 24.08C103.324 24.08 102.444 24.2933 101.804 24.72C101.164 25.12 100.844 25.6933 100.844 26.44C100.844 27.24 101.151 27.8267 101.764 28.2C102.404 28.5733 103.257 28.8533 104.324 29.04L105.724 29.28C107.137 29.52 108.431 29.8533 109.604 30.28C110.777 30.7067 111.697 31.32 112.364 32.12C113.057 32.92 113.404 33.9867 113.404 35.32C113.404 37.2933 112.671 38.8267 111.204 39.92C109.737 41.0133 107.764 41.56 105.284 41.56Z"fill={theme=== "light" ? "black" : "white"}/>
    <path d="M118.22 41V21.28H122.34V41H118.22ZM120.3 18.6C119.5 18.6 118.82 18.3467 118.26 17.84C117.726 17.3067 117.46 16.6267 117.46 15.8C117.46 14.9733 117.726 14.3067 118.26 13.8C118.82 13.2667 119.5 13 120.3 13C121.126 13 121.806 13.2667 122.34 13.8C122.873 14.3067 123.14 14.9733 123.14 15.8C123.14 16.6267 122.873 17.3067 122.34 17.84C121.806 18.3467 121.126 18.6 120.3 18.6Z" fill={theme=== "light" ? "black" : "white"}/>
    <path d="M135.854 41C134.654 41 133.694 40.64 132.974 39.92C132.281 39.2 131.934 38.24 131.934 37.04V24.76H126.494V21.28H131.934V14.76H136.054V21.28H141.934V24.76H136.054V36.32C136.054 37.12 136.427 37.52 137.174 37.52H141.294V41H135.854Z" fill={theme=== "light" ? "black" : "white"}/>
    <path d="M146.774 41V21.28H150.894V41H146.774ZM148.854 18.6C148.054 18.6 147.374 18.3467 146.814 17.84C146.281 17.3067 146.014 16.6267 146.014 15.8C146.014 14.9733 146.281 14.3067 146.814 13.8C147.374 13.2667 148.054 13 148.854 13C149.681 13 150.361 13.2667 150.894 13.8C151.428 14.3067 151.694 14.9733 151.694 15.8C151.694 16.6267 151.428 17.3067 150.894 17.84C150.361 18.3467 149.681 18.6 148.854 18.6Z" fill={theme=== "light" ? "black" : "white"}/>
    <path d="M161.569 41L154.929 21.28H159.289L164.529 37.96H165.169L170.409 21.28H174.769L168.129 41H161.569Z" fill={theme=== "light" ? "black" : "white"}/>
    <path d="M186.326 41.36C184.833 41.36 183.5 41.0267 182.326 40.36C181.153 39.6933 180.233 38.7467 179.566 37.52C178.9 36.2933 178.566 34.8267 178.566 33.12V21.28H182.686V32.84C182.686 34.5467 183.113 35.8133 183.966 36.64C184.82 37.44 186.006 37.84 187.526 37.84C189.206 37.84 190.553 37.28 191.566 36.16C192.606 35.0133 193.126 33.3733 193.126 31.24V21.28H197.246V41H193.206V38.04H192.566C192.193 38.84 191.526 39.6 190.566 40.32C189.606 41.0133 188.193 41.36 186.326 41.36Z"fill={theme=== "light" ? "black" : "white"}/>
    <path d="M211.417 41.56C208.91 41.56 206.83 41 205.177 39.88C203.523 38.76 202.51 37.0667 202.137 34.8L205.977 33.88C206.19 34.9733 206.55 35.84 207.057 36.48C207.563 37.12 208.19 37.5733 208.937 37.84C209.71 38.1067 210.537 38.24 211.417 38.24C212.723 38.24 213.723 37.9867 214.417 37.48C215.137 36.9733 215.497 36.32 215.497 35.52C215.497 34.72 215.163 34.1333 214.497 33.76C213.83 33.3867 212.843 33.08 211.537 32.84L210.177 32.6C208.843 32.36 207.63 32.0133 206.537 31.56C205.443 31.1067 204.577 30.48 203.937 29.68C203.297 28.88 202.977 27.8533 202.977 26.6C202.977 24.7333 203.67 23.2933 205.057 22.28C206.443 21.24 208.283 20.72 210.577 20.72C212.79 20.72 214.603 21.2267 216.017 22.24C217.457 23.2267 218.39 24.5733 218.817 26.28L214.977 27.36C214.737 26.16 214.23 25.32 213.457 24.84C212.683 24.3333 211.723 24.08 210.577 24.08C209.457 24.08 208.577 24.2933 207.937 24.72C207.297 25.12 206.977 25.6933 206.977 26.44C206.977 27.24 207.283 27.8267 207.897 28.2C208.537 28.5733 209.39 28.8533 210.457 29.04L211.857 29.28C213.27 29.52 214.563 29.8533 215.737 30.28C216.91 30.7067 217.83 31.32 218.497 32.12C219.19 32.92 219.537 33.9867 219.537 35.32C219.537 37.2933 218.803 38.8267 217.337 39.92C215.87 41.0133 213.897 41.56 211.417 41.56Z" fill={theme=== "light" ? "black" : "white"}/>
    </g>
    <defs>
    <clipPath id="clip0_330_1193">
    <rect width="219.537" height="56" fill={theme=== "light" ? "black" : "white"}/>
    </clipPath>
    <clipPath id="clip1_330_1193">
    <rect width="36" height="36"fill={theme=== "light" ? "black" : "white"} transform="translate(0 10)"/>
    </clipPath>
    </defs>
    </svg>
  )
}
