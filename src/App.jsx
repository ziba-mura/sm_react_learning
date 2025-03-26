import { ColoredMessage } from "./components/ColoredMessage";

export const App = () => {
    const onClickButton = () => {
        alert('ボタンクリック')
    }

    return (
        <>
            <h1 style={{color: "red"}}>Hello World</h1>
            <ColoredMessage color="blue">test message 1</ColoredMessage>
            <ColoredMessage color="red">test message 2</ColoredMessage>
            <button onClick={onClickButton}>ボタン</button>
        </>
    );
}