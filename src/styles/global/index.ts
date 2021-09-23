import { createGlobalStyle } from "styled-components"
import background from './background.jpg'


export default createGlobalStyle`
    html {
      height: 100%;
      body {
        display: flex;
        flex-direction: column;
        height: 100%;
        margin: 0;
        #root {
            background-image: url(${background});
            background-repeat: repeat;
            background-position: center;
            display: flex;
            font-family: sans-serif;
            height: 100%;
            justify-content: center;
            padding: 15px;
        }
      }
    }
`