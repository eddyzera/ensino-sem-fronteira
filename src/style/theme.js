import { extendTheme } from '@chakra-ui/react'

const themeCustom = extendTheme({
    colors: {
        white: '#FFF',
        black: {
            50: '#2a2a2a',
            100: '#121212'
        },
        yellow: '#F9E3A2',
        gray: '#F7F8FA',
        blue: {
            50:'#132743',
            100: '#0f2038'
        }
    },

    styles: {
        global: {
            'html, body': {
                margin: 0,
                padding: 0,
                boxSize: 'border-box',
                color: 'white',
                fontFamily: 'Open Sans, sans-serif',
                background: 'blue.100'
            },

            '@media (max-width: 1080px)': {
                'html': {
                    fontSize: '93.75%'
                }
            },

            '@media (max-width: 720px)': {
                'html': {
                    fontSize: '87.5%'
                }
            },

            h1: {
                color: 'black.100',
                fontWeight: '800',
            },

            h2: {
                color: 'black.100',
                fontWeight: '800',
            },

            h3: {
                color: 'black.100',
                fontWeight: '800',
            },

            li: {
                listStyle: 'none'
            }
        }
    }
})

export default themeCustom