"use client";
import Image from "next/image";
import { useMemo, useState } from "react";
import "./globals.css";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function klikButton() {
    alert("you clicked me");
  }

  return (
    <>
      <div
        style={{
          backgroundColor: "#ffff",
          height: "100vh",
          color: "#000",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "100px",
            paddingBottom: "100PX"
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
                  setName(e.target.value);
                }}
                style={{
                  border: "1px solid black",
                  borderRadius: "5%",
                }}
              />
            </label>
            <br />
            <br />
            <br />
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                style={{
                  border: "1px solid black",
                  borderRadius: "5%",
                }}
              />
            </label>
            <br />
            <br />
            <br />
            <button
              onClick={klikButton}
              style={{
                backgroundColor: "blue",
                color: "white",
                padding: "5px",
              }}
            >
              submit for input database
            </button>
          </form>
        </div>
        <div>
          <table
            style={{
              border: "1px",
              borderColor: "black",
              borderStyle: "solid"
            }}
          >
            <thead>
              <tr>
                <th className="borderOne">No.</th>
                <th className="borderOne">Nama</th>
                <th className="borderOne">Tempat Lahir</th>
                <th className="borderOne">Pendidikan</th>
                <th className="borderOne">Tanggal Bergabung</th>
                <th className="borderOne">Salary</th>
                <th className="borderOne">Usia</th>
                <th className="borderOne">Jenis Kelamin</th>
                <th className="borderOne">Aksi</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </div>
    </>
  );
}
