import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: {size?:number, inline?:boolean, className?:string, className2?:string, onClick?:() => {}}) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        id="Layer_1"
        data-name="Layer 1"
        viewBox="0 0 16 16"
        width={props.size ? props.size : 35}
        height={props.size ? props.size : 35}
        className={`hover:cursor-pointer ${props.inline ? "inline-block" : ""} `}
        onClick={props.onClick ? props.onClick : () => {}}
    >
        <g className={`fill-primary dark:fill-primaryDark stroke-0 ${props.className ? props.className : ""}`}>
            {/*top*/}
            <path
                d="M15.66 2.26C13.13.07 11.42-.1 10.34.12 8.6.48 8.2 1.92 6.59 1.84 4.97 1.76 4.49.24 2.51.02 1.49-.09.61.21.04.47L0 5.91c.11-.09.22-.19.35-.25 1.07-.53 2.26.1 3.51.76 1.1.58 2.24 1.17 3.28.94a.287.287 0 0 1-.17-.26V2.55c0-.17.14-.32.32-.32s.32.14.32.32V7.1s-.03.09-.05.13c.34-.16.51-.37.7-.63.22-.29.47-.63 1-.91 1.48-.77 3.64-.3 6.42 1.36V2.26ZM3.64 3.65c0 .17-.14.32-.32.32S3 3.83 3 3.65V1.72c0-.17.14-.32.32-.32s.32.14.32.32v1.93Z"
            />
            {/*bottom*/}
            <path
                d="m16.04 7.88-.36-.21C12.92 6 10.77 5.53 9.3 6.31c-.53.28-.78.61-1 .91-.22.3-.4.54-.85.7-1.1.4-2.33-.25-3.51-.88-.9-.48-1.76-.93-2.57-.95v4.83c.22-.37.6-.89 1.22-1.12 1.89-.71 3.92 2.25 5.73 1.53.57-.23.63-.62.98-1.02a.326.326 0 0 1-.1-.23v-2.5c0-.17.14-.32.32-.32s.32.14.32.32V9.9c.96-.51 2.72-.52 6.2 1.48v-3.5Z"
            />
            {/*big star*/}
            <path
                d="m12.96,8.17c-.14,0-.25-.11-.25-.25,0-1.19-.72-2.18-1.59-2.22-.13,0-.24-.12-.24-.25s.11-.24.24-.25c.89-.04,1.58-1.01,1.59-2.2,0-.14.11-.25.25-.25h0c.14,0,.25.11.25.25,0,1.19.72,2.18,1.59,2.22.13,0,.24.12.24.25s-.11.24-.24.25c-.89.04-1.58,1.01-1.59,2.2,0,.14-.11.25-.25.25h0Z"/>
            {/*star 1*/}
            <path
                  d="m5.09,12.16c-.86-.03-1.54-.73-1.54-1.59h0c0,.86-.69,1.55-1.54,1.58.86.03,1.54.73,1.54,1.59h0c0-.86.69-1.55,1.54-1.58Z"/>
            {/*star 2*/}
            <path
                d="M13.13 14.2a1.59 1.59 0 0 1-1.54-1.59c0 .86-.69 1.55-1.54 1.58.86.03 1.54.73 1.54 1.59 0-.86.69-1.55 1.54-1.58Z"
            />
        </g>
        {/*Outline*/}
        <path className={`fill-background dark:fill-backgroundDark stroke-0 ${props.className2 ? props.className2 : ""}`}
              d="M12.96 3c0 1.34.81 2.42 1.83 2.47-1.01.04-1.82 1.12-1.83 2.45 0-1.34-.81-2.42-1.83-2.47 1.01-.04 1.82-1.12 1.83-2.45m0-.5c-.28 0-.5.22-.5.5 0 1.05-.61 1.92-1.35 1.95-.27.01-.48.23-.48.5s.21.49.48.5c.75.03 1.35.91 1.35 1.97 0 .28.22.5.5.5s.5-.22.5-.5c0-1.05.61-1.92 1.35-1.95.27-.01.48-.23.48-.5s-.21-.49-.48-.5c-.75-.03-1.35-.91-1.35-1.97 0-.28-.22-.5-.5-.5Z"
        />

    </svg>
)
export default SvgComponent
