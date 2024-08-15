import React from "react";

import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Image from "next/image";
import LogoutForm from "@/components/LogoutForm";


export default async function HomePage() {

  const session = await auth();

  if (!session?.user) redirect("/");
  console.log('====================================');
  console.log(session?.user);
  console.log('====================================');

  return (
    <div className="flex flex-col items-center">
      <h1>Home Page</h1>
      <p>Name: {session?.user?.name}</p>
      {/* <p>Email: {session?.user}</p> */}
      {/* {session?.user?.image && (
        <Image
          src={session?.user?.image || "" }
          alt={session?.user?.name || ""}
          width={40}
          height={40}
          className="rounded-full "
          style={{ objectFit: "cover" }}
        />
      )} */}
      {/* <button onClick={handleLogout}>Logout</button> */}
      <LogoutForm />
    </div>
  );
}
