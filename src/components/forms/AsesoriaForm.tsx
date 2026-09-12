"use client";

import { Field, FormMessage, inputClass, selectClass, SubmitButton } from "./FormParts";
import { useFormSubmit } from "./useFormSubmit";

export default function AsesoriaForm({
  endpoint,
  submitLabel = "Solicitar asesoría",
}: {
  endpoint?: string;
  submitLabel?: string;
}) {
  const { status, submit } = useFormSubmit(endpoint);

  return (
    <form onSubmit={submit} className="space-y-5">
      <FormMessage
        status={status}
        successText="Gracias por escribirnos. Hemos recibido tu solicitud de asesoría y nuestro equipo se pondrá en contacto contigo para entender tu necesidad y proponerte el acompañamiento adecuado."
      />
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Nombre y apellido" required>
          <input name="nombre" required autoComplete="name" className={inputClass} />
        </Field>
        <Field label="Institución / clínica / hospital">
          <input
            name="institucion"
            autoComplete="organization"
            className={inputClass}
          />
        </Field>
        <Field label="Teléfono / WhatsApp" required>
          <input
            name="telefono"
            type="tel"
            required
            autoComplete="tel"
            className={inputClass}
          />
        </Field>
        <Field label="Correo electrónico" required>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClass}
          />
        </Field>
      </div>
      <Field label="Equipo o sistema que utiliza">
        <input name="equipo" className={inputClass} />
      </Field>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="¿El equipo fue adquirido con Pain Solutions?">
          <select
            name="equipo_pain_solutions"
            defaultValue=""
            className={selectClass}
          >
            <option value="">No estoy seguro / por definir</option>
            <option>Sí</option>
            <option>No</option>
            <option>Aún no tengo el equipo</option>
          </select>
        </Field>
        <Field label="¿Cuenta con horas de postventa disponibles?">
          <select name="horas_postventa" defaultValue="" className={selectClass}>
            <option value="">No estoy seguro / por definir</option>
            <option>Sí</option>
            <option>No</option>
          </select>
        </Field>
      </div>
      <Field label="Tipo de apoyo que necesita">
        <select name="tipo_apoyo" defaultValue="" className={selectClass}>
          <option value="">No estoy seguro / por definir</option>
          <option>Configuración del equipo</option>
          <option>Uso y funcionamiento</option>
          <option>Capacitación adicional</option>
          <option>Resolución de dudas específicas</option>
          <option>Otro</option>
        </select>
      </Field>
      <Field label="Comentarios adicionales">
        <textarea name="comentarios" rows={4} className={inputClass} />
      </Field>
      <SubmitButton submitting={status === "submitting"} label={submitLabel} />
    </form>
  );
}
