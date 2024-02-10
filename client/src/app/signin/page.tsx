'use client'
import { useState } from "react";
import { signIn } from 'next-auth/react';
import InputBox from "@/components/InputBox";
import Link from "next/link";
import { Button } from "@/components/Button";

const SignInPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleInputChange = (e: { target: { name: any; value: any; }; }) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleLogin = async () => {
    try {
      await signIn('credentials', { ...formData, redirect: true,callbackUrl: "/", });
    } catch (error) {
      console.error('Login failed', error);
      alert('Login failed. Please try again.');
    }
  };

  return (
    <div className="m-2 border rounded overflow-hidden shadow">
      <div className="p-2 bg-gradient-to-b from-white to-slate-200 text-slate-600">Login</div>
      <div className="p-2 flex flex-col gap-6">
        <InputBox name="email" labelText="Email" value={formData.email} required onChange={handleInputChange} />
        <InputBox name="password" labelText="Password" type="password" value={formData.password} required onChange={handleInputChange} />
        <div className="flex justify-center items-center gap-2">
          <Button onClick={handleLogin}>Login</Button>
          <Link className="" href={"/"}>Cancel</Link>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
