import { useState } from "react";


const PizzaForm = () => {
    const [pizzaName, setPizzaName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    const 전달데이터 = {
        pizzaName,
        description,
        price
    }
    // 스프링부트 연결 후 input에 작성한 데이터 전달
    const handleRegister = () => {
        axios    then   catch
    }
    return (
        <div className="pizzaform-container">
            <label>
                메뉴 이름 : 
                <input value={} onChange={}/>
            </label>
            <label>
                메뉴 설명 : 
                <input  value={} onChange={}/>
            </label>
            <label>
                메뉴 가격 : 
                <input  value={} onChange={}/>
            </label>
            <button onClick={handleRegister}>등록하기</button>
        </div>
    )
}

export default PizzaForm;