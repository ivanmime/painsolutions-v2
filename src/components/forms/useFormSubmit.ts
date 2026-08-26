"use client";

import { useState } from "react";

export type FormStatus = "idle" | "submitting" | "success" | "error";

export function useFormSubmit(endpoint: string | undefined) {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;
    const form = event.currentTarget;
    setStatus("submitting");

    if (!endpoint) {
      await new Promise((r) => setTimeout(r, 800));
      setStatus("success");
      form.reset();
      return;
    }

    try {
      const data = new FormData(form);
      const body = Object.fromEntries(data.entries());
      const url = new URL(window.location.href);
      body._source = url.pathname;
      body._utm = url.search;
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(body),
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return { status, submit };
}
