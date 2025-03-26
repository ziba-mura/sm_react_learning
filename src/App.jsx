export const App = () => {
    const onClickButton = () => {
        alert('ボタンクリック')
    }
    const pStyle = {
        color : "blue",
        fontSize : "20px"
    }
    return (
        <>
            <h1 style={{color: "red"}}>Hello World</h1>
            <p style={pStyle}>test</p>
            <button onClick={onClickButton}>ボタン</button>
        </>
    );
}