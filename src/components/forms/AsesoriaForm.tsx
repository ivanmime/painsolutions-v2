"use client";

import { Field, FormMessage, inputClass, selectClass, SubmitButton } from "./FormParts";
import { useFormSubmit } from "./useFormSubmit";

export default function AsesoriaForm({
  endpoint,
}: {
  endpoint?: string;
}) {
  const { status, submit } = useFormSubmit(endpoint);

  return (
    <form onSubmit={submit} className="space-y-5">
      <FormMessage
        status={status}
        successText="Gracias por contactarnos. Hemos recibido tu solicitud de asesoría. Nuestro equipo revisará la información y se pondrá en contacto contigo."
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
        <Field label="¿Qué necesitas?" required>
          <select name="necesidad" required defaultValue="" className={selectClass}>
            <option value="" disabled>
              Selecciona una opción
            </option>
            <option>Estoy evaluando un equipo</option>
            <option>Estoy buscando un insumo</option>
            <option>Necesito una cotización</option>
            <option>Necesito asesoría</option>
            <option>Otro</option>
          </select>
        </Field>
      </div>
      <Field label="Solución de interés">
        <select name="solucion" defaultValue="" className={selectClass}>
          <option value="">No estoy seguro / por definir</option>
          <option>RFA Solutions</option>
          <option>Conventional RFA</option>
          <option>Cooled RFA</option>
          <option>Tined RFA</option>
          <option>Equipos y accesorios</option>
        </select>
      </Field>
      <Field label="Mensaje">
        <textarea name="mensaje" rows={4} className={inputClass} />
      </Field>
      <SubmitButton submitting={status === "submitting"} label="Solicitar asesoría" />
    </form>
  );
}
