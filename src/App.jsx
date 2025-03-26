import {useState} from "react"
import { ColoredMessage } from "./components/ColoredMessage";

export const App = () => {
    const [num, setNum] = useState(0)
    const onClickButton = () => {
        setNum(num + 1)
    }

    return (
        <>
            <h1 style={{color: "red"}}>Hello World</h1>
            <ColoredMessage color="blue">test message 1</ColoredMessage>
            <ColoredMessage color="red">test message 2</ColoredMessage>
            <button onClick={onClickButton}>ボタン</button>
            <p>{num}</p>
        </>
    );
}