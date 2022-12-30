import {useState} from "react";
import Button from "./Button";
import Input from "./Input";
import CheckboxItem from "./CheckboxItem";

const deliveryInputsData= [
    {
        'type': 'text',
        'text': 'Категория товара:',
        'placeholder': 'Категория товара',
        'required': true,
        'id': 'df-input-1',
    },
    {
        'type': 'number',
        'text': 'Стоимость груза:',
        'placeholder': 'Введите стоимость',
        'required': true,
        'id': 'df-input-2',
    },
    {
        'type': 'number',
        'text': 'Вес груза (кг):',
        'placeholder': 'Введите вес',
        'required': true,
        'id': 'df-input-3',
    },
    {
        'type': 'number',
        'text': 'Объем груза (м3):',
        'placeholder': 'Введите объем',
        'required': true,
        'id': 'df-input-4',
    },
    {
        'type': 'number',
        'text': 'Код ТН ВЭД:',
        'placeholder': 'Введите код',
        'required': true,
        'id': 'df-input-5',
    },
]

const DeliveryForm = () => {
    // const [inputValue,setInputValue] = useState('')
    const [value,setValue] = useState({
        name:'',
        lastName:'',
        age:undefined,
        checked:false,
        male:'female',
    })

    const onChange = (e:any) => {
        console.log('e',e)
        setValue(prev => ({...prev, [e.target.name] :e.target.value}))
    }

    const submitHandler = (e:any) => {
        e.preventDefault()
        console.log('value',value)
    }

    return(
        <form onSubmit={submitHandler} className="delivery-form">
            <div className="delivery-form__inner">
                <div className="delivery-form__body">
                    {deliveryInputsData.map(input => (
                        <Input type={input.type}
                               title={input.text}
                               placeholder={input.placeholder}
                               id={input.id}
                               required={input.required}
                               key={input.id}
                        />
                    ))}
                    <div className="delivery-form__checkbox-wrapper">
                        <CheckboxItem title="Страховка"/>
                        <CheckboxItem title="Таможенное оформление"/>
                    </div>
                </div>
                <div className="delivery-form__controls">
                    <Button text="Рассчитать" isIcon={true} />
                </div>
            </div>
        </form>
    )
}

export default DeliveryForm;