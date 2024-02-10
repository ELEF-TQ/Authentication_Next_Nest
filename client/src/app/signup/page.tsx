'use client'

import { useState } from "react";
import { Button } from "@/components/Button";
import InputBox from "@/components/InputBox";
import { api } from "@/lib/Constants";
import Link from "next/link";

const SignupPage = () => {

  const [formData, setFormData] = useState({name: "",email: "",password: ""});

  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const register = async () => {
    try {
      await api.post("/auth/signup", formData);
      alert("User Registered!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="m-2 border rounded overflow-hidden shadow">
      <div className="p-2 bg-gradient-to-b from-white to-slate-200 text-slate-600">Sign up</div>
      <div className="p-2 flex flex-col gap-6">
        <InputBox autoComplete="off" name="name" labelText="Name" value={formData.name} required onChange={handleInputChange} />
        <InputBox name="email" labelText="Email" value={formData.email} required onChange={handleInputChange} />
        <InputBox name="password" labelText="password" type="password" value={formData.password} required onChange={handleInputChange} />
        <div className="flex justify-center items-center gap-2">
          <Button onClick={register}>Submit</Button>
          <Link className="" href={"/"}>Cancel</Link>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;