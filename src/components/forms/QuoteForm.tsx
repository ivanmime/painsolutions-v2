"use client";

import { Field, FormMessage, inputClass, SubmitButton } from "./FormParts";
import { useFormSubmit } from "./useFormSubmit";

export default function QuoteForm({
  endpoint,
  productName,
  productSku,
  family,
}: {
  endpoint?: string;
  productName: string;
  productSku?: string;
  family: string;
}) {
  const { status, submit } = useFormSubmit(endpoint);

  return (
    <form onSubmit={submit} className="space-y-5">
      <FormMessage
        status={status}
        successText="Gracias por contactarnos. Hemos recibido tu solicitud. Nuestro equipo revisará la información y se pondrá en contacto contigo."
      />
      <input type="hidden" name="producto" value={productName} />
      <input type="hidden" name="sku" value={productSku ?? ""} />
      <input type="hidden" name="familia" value={family} />
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Nombre y apellido" required>
          <input name="nombre" required autoComplete="name" className={inputClass} />
        </Field>
        <Field label="Institución / clínica" required>
          <input
            name="institucion"
            required
            autoComplete="organization"
            className={inputClass}
          />
        </Field>
        <Field label="Especialidad o cargo">
          <input name="cargo" className={inputClass} />
        </Field>
        <Field label="Email" required>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClass}
          />
        </Field>
        <Field label="WhatsApp / teléfono" required>
          <input
            name="telefono"
            type="tel"
            required
            autoComplete="tel"
            className={inputClass}
          />
        </Field>
        <Field label="Cantidad aproximada">
          <input name="cantidad" inputMode="numeric" className={inputClass} />
        </Field>
      </div>
      <Field label="Mensaje">
        <textarea name="mensaje" rows={3} className={inputClass} />
      </Field>
      <SubmitButton submitting={status === "submitting"} label="Solicitar cotización" />
    </form>
  );
}
