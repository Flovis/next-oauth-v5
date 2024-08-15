
import { onLogout } from "@/app/actions";
import React from "react";

export default function LogoutForm() {
  return (
    <form action={onLogout}>
      <button type="submit">Logout</button>
    </form>
  );
}
