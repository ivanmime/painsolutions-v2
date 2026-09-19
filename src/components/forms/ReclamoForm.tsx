"use client";

import { Field, FormMessage, inputClass, selectClass, SubmitButton } from "./FormParts";
import { useFormSubmit } from "./useFormSubmit";

function Group({
  code,
  title,
  children,
}: {
  code: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-t-2 border-ink pt-6">
      <div className="flex items-baseline gap-3 font-mono text-[0.625rem] uppercase tracking-[0.2em] text-ink-muted">
        <span className="text-teal-deep">{code}</span>
        <span aria-hidden="true" className="inline-block h-px w-6 bg-ink/30" />
        <span>{title}</span>
      </div>
      <div className="mt-5 space-y-5">{children}</div>
    </div>
  );
}

export default function ReclamoForm({
  endpoint,
  submitLabel = "Enviar reclamo",
}: {
  endpoint?: string;
  submitLabel?: string;
}) {
  const { status, submit } = useFormSubmit(endpoint);

  return (
    <form onSubmit={submit} className="space-y-8">
      <FormMessage
        status={status}
        successText="Hemos registrado tu hoja de reclamación. Recibirás una copia en el correo indicado y una respuesta dentro del plazo establecido por la normativa de protección al consumidor."
      />

      <Group code="01" title="Datos del consumidor">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Nombre y apellido" required>
            <input name="nombre" required autoComplete="name" className={inputClass} />
          </Field>
          <Field label="Tipo de documento" required>
            <select name="tipo_documento" required defaultValue="" className={selectClass}>
              <option value="" disabled>
                Selecciona una opción
              </option>
              <option>DNI</option>
              <option>Carné de extranjería</option>
              <option>Pasaporte</option>
            </select>
          </Field>
          <Field label="Número de documento" required>
            <input name="documento" required className={inputClass} />
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
        </div>
        <Field label="Correo electrónico" required>
          <input name="email" type="email" required autoComplete="email" className={inputClass} />
        </Field>
        <Field label="Domicilio" hint="Opcional">
          <input name="domicilio" autoComplete="street-address" className={inputClass} />
        </Field>
      </Group>

      <Group code="02" title="Identificación del bien o servicio">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Tipo de bien o servicio" required>
            <select name="bien_tipo" required defaultValue="" className={selectClass}>
              <option value="" disabled>
                Selecciona una opción
              </option>
              <option>Producto</option>
              <option>Servicio</option>
              <option>Alquiler de equipo</option>
              <option>Asesoría</option>
              <option>Otro</option>
            </select>
          </Field>
          <Field label="Monto" hint="Opcional">
            <input name="monto" inputMode="decimal" className={inputClass} />
          </Field>
        </div>
        <Field label="Descripción del bien o servicio" required>
          <input name="descripcion" required className={inputClass} />
        </Field>
        <Field label="Fecha de adquisición o de ocurrencia" hint="Opcional">
          <input name="fecha" type="date" className={inputClass} />
        </Field>
      </Group>

      <Group code="03" title="Detalle de la reclamación">
        <Field label="Tipo" required>
          <select name="tipo" required defaultValue="" className={selectClass}>
            <option value="" disabled>
              Selecciona una opción
            </option>
            <option>Reclamo — disconformidad con el producto o servicio</option>
            <option>Queja — malestar con la atención al público</option>
          </select>
        </Field>
        <Field label="Detalle de la reclamación" required>
          <textarea name="detalle" required rows={5} className={inputClass} />
        </Field>
        <Field label="Pedido" required>
          <textarea name="pedido" required rows={4} className={inputClass} />
        </Field>
        <Field label="Observaciones" hint="Opcional">
          <textarea name="observaciones" rows={3} className={inputClass} />
        </Field>
      </Group>

      <SubmitButton submitting={status === "submitting"} label={submitLabel} />
    </form>
  );
}
