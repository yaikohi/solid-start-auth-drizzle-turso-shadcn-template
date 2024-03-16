import { Button } from "@/components/ui/button";
import { createSession, signIn } from "@solid-mediakit/auth/client";
import { Show } from "solid-js";

export default function Home() {
  const session = createSession();

  return (
    <main class="flex flex-row">
      <div class="lg:p-8">
        <Show
          when={session()}
          fallback={
            <>
              <div class="flex gap-5 align-items-center justify-center">
                <p>You are not signed in.</p>
                <Button onClick={() => signIn("discord")}>Sign In</Button>
              </div>
            </>
          }
        >
          Hi {session()?.user?.name}!
        </Show>
      </div>
    </main>
  );
}
