"use client";

import { Field, FormMessage, inputClass, selectClass, SubmitButton } from "./FormParts";
import { useFormSubmit } from "./useFormSubmit";

export default function ContactForm({
  endpoint,
}: {
  endpoint?: string;
}) {
  const { status, submit } = useFormSubmit(endpoint);

  return (
    <form onSubmit={submit} className="space-y-5" noValidate={false}>
      <FormMessage
        status={status}
        successText="Gracias por contactarnos. Hemos recibido tu solicitud. Nuestro equipo revisará la información y se pondrá en contacto contigo."
      />
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Nombre y apellido" required>
          <input name="nombre" required autoComplete="name" className={inputClass} />
        </Field>
        <Field label="Institución / clínica">
          <input name="institucion" autoComplete="organization" className={inputClass} />
        </Field>
        <Field label="Especialidad o cargo">
          <input name="cargo" className={inputClass} />
        </Field>
        <Field label="Email" required>
          <input name="email" type="email" required autoComplete="email" className={inputClass} />
        </Field>
        <Field label="WhatsApp / teléfono" required>
          <input name="telefono" type="tel" required autoComplete="tel" className={inputClass} />
        </Field>
        <Field label="Motivo" required>
          <select name="motivo" required defaultValue="" className={selectClass}>
            <option value="" disabled>
              Selecciona una opción
            </option>
            <option>Producto</option>
            <option>Cotización</option>
            <option>Disponibilidad</option>
            <option>Asesoría</option>
            <option>Otro</option>
          </select>
        </Field>
      </div>
      <Field label="Mensaje" required>
        <textarea name="mensaje" required rows={4} className={inputClass} />
      </Field>
      <SubmitButton submitting={status === "submitting"} label="Recibir información" />
    </form>
  );
}
