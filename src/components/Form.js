import React,{useState, useEffect} from 'react';
import * as yup from 'yup';
import axios from 'axios';

const formSchema = yup.object().shape({
    name: yup.string().required("Name is a required field."), 
    size: yup.string().required('Must choose a size.'),
    extraCheese: yup.boolean(),
    bacon: yup.boolean(),
    pepperoni: yup.boolean(),
    supreme: yup.boolean(),
    special: yup.string()
});

function Form() {
    const [post, setPost] = useState([]);
    const [buttonDisabled, setButtonDisabled] = useState(true)
    const [formState, setFormState] = useState({
        name: '',
        size: '',
        extraCheese: '',
        bacon: '',
        pepperoni: '',
        supreme: '',
        special: ''
    })
    const [errors, setErrors] = useState({
        name: '',
        size: '',
        extraCheese: '',
        bacon: '',
        pepperoni: '',
        supreme: '',
        special: ''
    })
    useEffect(() => {
        formSchema.isValid(formState).then(valid => {
          setButtonDisabled(!valid);
        });
      }, [formState]);
      const formSubmit = e => {
        e.preventDefault();
        axios
          .post("https://reqres.in/api/users", formState)
          .then(res => {
            setPost(res.data);
            setFormState({
              name: "",
              size: "",
              extraCheese: "",
              bacon: "",
              pepperoni: "",
              supreme: "",
              special: ""
            });
          })
          .catch(err => console.log(err.response));
    };
    const validateChange = e => {
        yup
          .reach(formSchema, e.target.name)
          .validate(e.target.value)
          .then(valid => {
            setErrors({
              ...errors,
              [e.target.name]: ""
            });
          })
          .catch(err => {
            setErrors({
              ...errors,
              [e.target.name]: err.errors[0]
            });
          });
      };
    const inputChange = e => {
        e.persist();
        const newFormData = {
          ...formState,
          [e.target.name]:
            e.target.type === "checkbox" ? e.target.checked : e.target.value
        };
    
        validateChange(e);
        setFormState(newFormData);
      };
      const checkBoxChange = e => {
        e.persist();
        const newFormData = {
          ...formState,
          [e.target.name]:
            e.target.type === "checkbox" ? e.target.checked : e.target.value
        };
        setFormState(newFormData);
      };

    return (
        <div>
            <form onSubmit={formSubmit}>
                <label htmlFor='name'>
                    <input type = "text" name = 'name' id = "name" value={formState.name} onChange = {inputChange}/>
                    {errors.name.length > 0 ? <p className="error">{errors.name}</p> : null}
                </label>
                <div className='pizzaSize'>
                    <label htmlFor='dropDown'>
                        <select name="size" id= 'size' value = {formState.size} onChange = {inputChange}>
                            <option value="small">Small</option>
                            <option value="medium">Medium</option>
                            <option value="large">Large</option>
                            <option value="x-large">X-Large</option>
                        </select>
                        {errors.size.length > 0 ? (
                            <p className="error">{errors.size}</p>
                        ) : null}
                    </label>
                </div>
                <div className='toppings'>
                    <p>toppings:</p>
                    <label htmlFor='checkBox'>
                        <input type = 'checkbox'  name='extraCheese' value = {formState.extraCheese} onChange = {checkBoxChange}/>
                        Extra Cheese (+ $1.00)
                    </label>
                    <label htmlFor='checkBox'>
                        <input type = 'checkbox' name ='bacon' value = {formState.bacon} onChange = {checkBoxChange}/>
                        Bacon
                    </label>
                    <label htmlFor='checkBox'>
                        <input type = 'checkbox' name = 'pepperoni' value = {formState.pepperoni} onChange = {checkBoxChange}/>
                        Pepperoni 
                    </label>
                    <label htmlFor='checkBox'>
                        <input type = 'checkbox' name= 'supreme' value={formState.supreme} onChange = {checkBoxChange}/>
                        Supreme
                    </label>
                </div>
                <div className='special'>
                    <label htmlFor='textArea'>
                        Special Instructions:
                        <textarea name= 'special' id='special' value={formState.special} onChange={inputChange}>
                            
                        </textarea>
                    </label>
                </div>
                <div className='submit'>
                    <button disabled={buttonDisabled} >
                        Add to Order
                    </button>
                    <pre>{JSON.stringify(post, null, 2)}</pre>
                </div>
            </form>
        </div>
    )
}
export default Form 