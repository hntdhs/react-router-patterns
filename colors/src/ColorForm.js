import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./ColorForm.css";

function ColorForm({addColor}) {
    const [form, updateForm] = useState({name: "", hex: "#ffffff"});
    const history = useHistory();

    function handleChange(e) {
        e.persist();
        updateForm(f => ({ ...f, [e.target.name]: e.target.value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        addColor({ [form.name]: form.hex });
        history.push("/colors");
    }

    const {hex, name} = form;

    return (
        <div className="NewColor">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">What's the name of this color?</label>
              <input
                name="name"
                id="name"
                placeholder="Enter color name"
                onChange={handleChange}
                value={name}
              />
            </div>
            <div>
              <label htmlFor="hex">What's the hex value of this color?</label>
              <input
                type="color"
                name="hex"
                id="hex"
                onChange={handleChange}
                value={hex}
              />
            </div>
            <input type="Submit" value="Add this color" readOnly />
          </form>
        </div>
      );
    }
    
    export default ColorForm;


