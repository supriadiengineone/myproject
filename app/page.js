'use client'
import Image from "next/image";
import { useMemo, useState } from "react";

export default function Home() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  function klikButton() {
    alert('you clicked me')
  }

  return (
    <div
      style={{
        backgroundColor: "#ffff",
        height: "100vh",
        color: "#000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <form>
        <label>
          Name:
          <input 
          type="text"
          name="inputName"
          value={name}
          onChange={(e) => {
            setName(
              e.target.value
            )
          }}
          style={{
            border: "1px solid black",
            borderRadius: "5%"
          }}
          />
        </label><br/><br/><br/>
        <label>
          Email:
          <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(
              e.target.value
            )
          }}
          style={{
            border: "1px solid black",
            borderRadius: "5%"
          }}
          />
        </label><br/><br/><br/>
          <button onClick={klikButton} style={{
            backgroundColor: "blue",
            color: "white",
            padding: "5px"
          }}>
            submit for input database
          </button>
      </form>
    </div>
  );
}
