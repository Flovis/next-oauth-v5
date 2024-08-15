import { doSocialLogin } from "@/app/actions";
import React from "react";

export default function LoginForm() {

  return (
    <form className="flex gap-4" action={doSocialLogin}>
      <button type="submit" name="action" value="google">
        Sign in with Google
      </button>
      <button type="submit" name="action" value="github">
        Sign in with GitHub
      </button>
    </form>
  );
}
