"use client";
import LoginForm from "@/components/LoginForm";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24 gap-10">
      <h1>Login Now</h1>
      <LoginForm />
    </main>
  );
}
