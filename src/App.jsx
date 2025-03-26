import { ColoredMessage } from "./components/ColoredMessage";

export const App = () => {
    const onClickButton = () => {
        alert('ボタンクリック')
    }

    return (
        <>
            <h1 style={{color: "red"}}>Hello World</h1>
            <ColoredMessage color="blue" message="test message 1"/>
            <ColoredMessage color="red" message="test message 2"/>
            <button onClick={onClickButton}>ボタン</button>
        </>
    );
}