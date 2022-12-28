/* TODO Что нужно сделать
1. Input + Label
2. Checkbox
3. Radio Button

4. Input File
5. Select
*/

const Input = () => {
    return (
        <div className="wrapper">
            <div className="input-item">
                <label htmlFor="input-1" className="input-item__label">Категория товара:</label>
                <input type="text" placeholder="Категория товара" className="input-item__input" id="input-1"/>
            </div>

            <div className="input-item">
                <label htmlFor="input-2" className="input-item__label">Категория товара:</label>
                <input type="text" placeholder="Категория товара" className="input-item__input" id="input-2" disabled/>
            </div>
        </div>
    )
}

export default Input;