"use client";

import { Field, FormMessage, inputClass, selectClass, SubmitButton } from "./FormParts";
import { useFormSubmit } from "./useFormSubmit";

export default function AlquilerForm({ endpoint }: { endpoint?: string }) {
  const { status, submit } = useFormSubmit(endpoint);

  return (
    <form onSubmit={submit} className="space-y-5">
      <FormMessage
        status={status}
        successText="Gracias por escribirnos. Hemos recibido los datos de tu procedimiento y nuestro equipo se pondrá en contacto contigo para revisar disponibilidad, configuración y condiciones del servicio."
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
        <Field label="Ciudad">
          <input
            name="ciudad"
            autoComplete="address-level2"
            className={inputClass}
          />
        </Field>
        <Field label="Fecha estimada del procedimiento">
          <input
            name="fecha_procedimiento"
            type="date"
            className={inputClass}
          />
        </Field>
      </div>
      <Field label="Lugar o dirección del procedimiento">
        <input
          name="lugar"
          autoComplete="street-address"
          className={inputClass}
        />
      </Field>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Tipo de procedimiento">
          <input name="tipo_procedimiento" className={inputClass} />
        </Field>
        <Field label="Equipo requerido">
          <select name="equipo" defaultValue="" className={selectClass}>
            <option value="">No estoy seguro / por definir</option>
            <option>Cooled RF — Avanos</option>
            <option>Cooled RF — Baylis Medical</option>
          </select>
        </Field>
        <Field label="Cánula o configuración requerida" hint="si la conoce">
          <input name="canula" className={inputClass} />
        </Field>
        <Field label="Número estimado de procedimientos">
          <input
            name="numero_procedimientos"
            type="number"
            min={1}
            inputMode="numeric"
            className={inputClass}
          />
        </Field>
      </div>
      <Field label="Comentarios adicionales">
        <textarea name="comentarios" rows={4} className={inputClass} />
      </Field>
      <SubmitButton
        submitting={status === "submitting"}
        label="Solicitar información"
      />
    </form>
  );
}
