import React,{useState} from 'react';

function Form() {
    const [formState, setFormState] = useState({
        name: '',
        size: '',
        extraCheese: '',
        bacon: '',
        pepperoni: '',
        supreme: '',
        special: '',
    })
    
    return (
        <div>
            <form>
                <label htmlFor='name'>
                    <input type = "text" name = 'name' />
                </label>
                <div className='pizzaSize'>
                    <label htmlFor='dropDown'>
                        <select name="size">
                            <option value="small">Small</option>
                            <option value="medium">Medium</option>
                            <option value="large">Large</option>
                            <option value="x-large">X-Large</option>
                        </select>
                    </label>
                </div>
                <div className='toppings'>
                    <p>toppings:</p>
                    <label htmlFor='checkBox'>
                        <input type = 'checkbox'  name='extraCheese'/>
                        Extra Cheese (+ $1.00)
                    </label>
                    <label htmlFor='checkBox'>
                        <input type = 'checkbox' name ='bacon'/>
                        Bacon
                    </label>
                    <label htmlFor='checkBox'>
                        <input type = 'checkbox' name = 'pepperoni'/>
                        Pepperoni 
                    </label>
                    <label htmlFor='checkBox'>
                        <input type = 'checkbox' name= 'supreme'/>
                        Supreme
                    </label>
                </div>
                <div className='special'>
                    <label htmlFor='textArea'>
                        Special Instructions:
                        <textarea name= 'instructions'>
                            
                        </textarea>
                    </label>
                </div>
                <div className='submit'>
                    <button>
                        Add to Order
                    </button>
                </div>
            </form>
        </div>
    )
}
export default Form 