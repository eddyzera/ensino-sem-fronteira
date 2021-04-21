import { 
    ChakraProvider, 
    ColorModeProvider, 
    CSSReset 
} from '@chakra-ui/react'
import themCustom from '../style/theme'

export default function ThemeProvider ({ children }) {
    return (
        <ChakraProvider theme={themCustom}>
            <ColorModeProvider
                options={{
                    useSystemColorMode: true
                }}
            >
                <CSSReset />
                { children }
            </ColorModeProvider>
        </ChakraProvider>
    )
}