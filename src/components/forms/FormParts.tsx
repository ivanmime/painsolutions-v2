import { Button } from "@/components/ui/Button";

export function Field({
  label,
  required,
  children,
  hint,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
  hint?: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 flex items-baseline justify-between font-mono text-[0.625rem] font-bold uppercase tracking-[0.2em] text-ink">
        <span>
          {label}
          {required ? (
            <span aria-hidden="true" className="ml-1 text-teal-deep">
              *
            </span>
          ) : null}
        </span>
        {hint ? <span className="text-ink-muted/70">{hint}</span> : null}
      </span>
      {children}
    </label>
  );
}

export const inputClass =
  "w-full border-2 border-ink/15 bg-paper px-4 py-3.5 text-[0.9375rem] text-ink placeholder:text-ink-muted/60 transition-colors focus:border-teal focus:outline-none focus:ring-0";

export const selectClass = inputClass + " appearance-none bg-no-repeat pr-10";

export function FormMessage({
  status,
  successText,
}: {
  status: "idle" | "submitting" | "success" | "error";
  successText: string;
}) {
  if (status === "success") {
    return (
      <div
        role="status"
        className="flex items-start gap-3 border-2 border-teal bg-ice px-4 py-3"
      >
        <span
          aria-hidden="true"
          className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center bg-teal text-paper"
        >
          ✓
        </span>
        <p className="text-sm text-ink">{successText}</p>
      </div>
    );
  }
  if (status === "error") {
    return (
      <div
        role="alert"
        className="flex items-start gap-3 border-2 border-accent bg-accent/5 px-4 py-3"
      >
        <span
          aria-hidden="true"
          className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center bg-accent text-paper"
        >
          !
        </span>
        <p className="text-sm text-ink">
          Hubo un problema al enviar tu consulta. Inténtalo nuevamente o
          escríbenos por WhatsApp.
        </p>
      </div>
    );
  }
  return null;
}

export function SubmitButton({
  submitting,
  label,
}: {
  submitting: boolean;
  label: string;
}) {
  return (
    <Button type="submit" disabled={submitting} className="w-full sm:w-auto">
      {submitting ? "Enviando…" : label}
    </Button>
  );
}
