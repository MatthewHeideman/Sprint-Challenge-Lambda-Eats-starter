import React from 'react';

function Form() {

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
                        <input type = 'checkbox'  />
                        Extra Cheese (+ $1.00)
                    </label>
                    <label htmlFor='checkBox'>
                        <input type = 'checkbox' />
                        Bacon
                    </label>
                    <label htmlFor='checkBox'>
                        <input type = 'checkbox' />
                        Pepperoni 
                    </label>
                    <label htmlFor='checkBox'>
                        <input type = 'checkbox' />
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
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}
export default Form 