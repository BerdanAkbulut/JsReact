import React, { useState, useReducer } from "react";
import Male from "./images/elliot.jpg"
import Female from "./images/jenny.jpg"
function AddContact() {
  function reducer(state, action) {
    switch (action.type) {
      case "add":
        return [...state, action.payload];
      case "delete":
        return state.filter((contact) => {
          return contact.id !== action.payload.id;
        });
      default:
        throw new Error();
    }
  }

  const initialState = [
    { id: Date.now(), name: "Berdan", email: "bedo@gmail.com",gender:"male" },
  ];

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender,setGender] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);

  const contact = {
    id: Date.now(),
    name,
    email,
    gender
  };

  const addContact = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setGender("")
    dispatch({ type: "add", payload: contact });
  };

  const deleteContact = (e) => {
    e.preventDefault();
    dispatch({ type: "delete", payload: contact });
  };

  return (
    <div>
      <div style={{ marginTop: "20px" }}>
        <h2 class="ui center aligned icon header">
          <i class="circular users icon"></i>
          Kişi Ekle
        </h2>
        <form className="ui form" onSubmit={addContact}>
            
            <div class="ui input focus">
              <label>Ad</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
            
       
          <br /> <br />
          <div class="ui input focus">
          <label>E-mail</label>
          
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <br /> <br /> <br />
          <div className="field">Cinsiyetinizi Seçiniz</div>
          <br/>

          <div className="field">
            <input type="radio" value="male" name="gender" onChange={(e)=> {setGender(e.target.value)}} />
            Erkek
            </div>  
        <br/>
            <div className="field">
            <input type="radio" value="female" name="gender" onChange={(e)=> {setGender(e.target.value)}} />
            Kadın
            </div>
           
          <hr />
          <div>
            {" "}
            <button className="ui button">Ekle</button>
          </div>
        </form>
        <br /> <br /> <br />
        <div className="ui center aligned grid">
          <i class="hand point down icon"></i>
        </div>
        <div class="ui cards" style={{ marginTop: "50px" }}>
          {state.map((contact) => {
            return (
              <div class="card">
                <div class="content">
                    {contact.gender=="male" ? <img class="right floated mini ui image" src={Male}/>: <img class="right floated mini ui image" src={Female}/>  }
                
                  <div class="header"></div>
                  <div class="meta">{contact.name}</div>
                  <div class="description">{contact.email}</div>
                  
                </div>
                <div class="extra content">
                  <div class="ui two buttons">
                    <div
                      key={contact}
                      class="ui basic red button"
                      onClick={() => {
                        dispatch({
                          type: "delete",
                          payload: { id: contact.id },
                        });
                      }}
                    >
                      Sil
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AddContact;
