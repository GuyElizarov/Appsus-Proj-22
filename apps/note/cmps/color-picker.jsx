export function ColorPicker({ changeColor, noteId }) {
    function onChangeColor(color) {
        changeColor(color, noteId)
    }

    return <div className="color-picker">
        <span className="color-choice blank" style={{ backgroundColor: '#FFFFFF' }} onClick={() => onChangeColor('#FFFFFF')}></span>
        <span className="color-choice" style={{ backgroundColor: '#f94144' }} onClick={() => onChangeColor('#f94144')}></span>
        <span className="color-choice" style={{ backgroundColor: '#f3722c' }} onClick={() => onChangeColor('#f3722c')}></span>
        <span className="color-choice" style={{ backgroundColor: '#f8961e' }} onClick={() => onChangeColor('#f8961e')}></span>
        <span className="color-choice" style={{ backgroundColor: '#f9844a' }} onClick={() => onChangeColor('#f9844a')}></span>
        <span className="color-choice" style={{ backgroundColor: '#f9c74f' }} onClick={() => onChangeColor('#f9c74f')}></span>
        <span className="color-choice" style={{ backgroundColor: '#90be6d' }} onClick={() => onChangeColor('#90be6d')}></span>
        <span className="color-choice" style={{ backgroundColor: '#43aa8b' }} onClick={() => onChangeColor('#43aa8b')}></span>
        <span className="color-choice" style={{ backgroundColor: '#577590' }} onClick={() => onChangeColor('#577590')}></span>
        <span className="color-choice" style={{ backgroundColor: '#277da1' }} onClick={() => onChangeColor('#277da1')}> </span>

    </div>
}