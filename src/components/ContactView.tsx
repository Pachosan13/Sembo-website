import React, { useState } from "react";
import { COMPANY_NAP } from "../data";
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, CheckCircle, FileText } from "lucide-react";
import Logo from "./Logo";

interface FormState {
  name: string;
  company: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactView() {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    company: "",
    phone: "",
    email: "",
    subject: "Mantenimiento Preventivo",
    message: ""
  });

  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState("");

  const validate = (): boolean => {
    const tempErrors: Partial<FormState> = {};
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = "El nombre es obligatorio.";
      isValid = false;
    }
    if (!formData.phone.trim()) {
      tempErrors.phone = "El teléfono es obligatorio.";
      isValid = false;
    }
    if (!formData.email.trim()) {
      tempErrors.email = "El correo electrónico es obligatorio.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "El correo electrónico no es válido.";
      isValid = false;
    }
    if (!formData.message.trim()) {
      tempErrors.message = "El mensaje es obligatorio.";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Simulate API call
      // Generate a technical ticket ID
      const randNum = Math.floor(100000 + Math.random() * 90000);
      setTicketId(`SEMCO-REQ-${randNum}`);
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      company: "",
      phone: "",
      email: "",
      subject: "Mantenimiento Preventivo",
      message: ""
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <div className="w-full bg-brand-navy text-brand-text-light pb-20" id="contact-view">
      
      {/* Page Header */}
      <section className="bg-navy-950 border-b border-brand-navy-light/40 py-16 blueprint-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-mono font-bold tracking-widest text-brand-cyan uppercase block mb-1">
            CANALES DE ATENCIÓN DIRECTA
          </span>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-white tracking-tight">
            Contáctanos
          </h1>
          <p className="text-xs sm:text-sm text-brand-acero leading-relaxed mt-2 max-w-xl">
            Cuéntanos sobre tu proyecto o el sistema que necesitas mantener. Te respondemos a la brevedad con un ingeniero idóneo.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Form / Success Ticket */}
          <div className="lg:col-span-7">
            {isSubmitted ? (
              <div className="bg-navy-950 border border-brand-cyan p-8 rounded-lg space-y-6 relative overflow-hidden blueprint-grid">
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-cyan/5 rounded-full blur-xl pointer-events-none"></div>
                
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-brand-cyan/15 rounded-full">
                    <CheckCircle className="w-8 h-8 text-brand-cyan" />
                  </div>
                  <div>
                    <h2 className="text-lg font-display font-extrabold text-white">¡Solicitud recibida con éxito!</h2>
                    <span className="text-xs font-mono text-brand-cyan">{ticketId}</span>
                  </div>
                </div>

                {/* Simulated service ticket detail */}
                <div className="p-5 bg-brand-navy-light/40 border border-brand-navy-light rounded font-mono text-xs space-y-3">
                  <div className="text-center text-brand-cyan font-bold pb-2 border-b border-brand-navy-light/60">
                    TICKET DE SOLICITUD ELECTROMECÁNICA
                  </div>
                  <div className="grid grid-cols-12 gap-2 text-slate-300">
                    <span className="col-span-4 text-brand-acero uppercase">Remitente:</span>
                    <span className="col-span-8 text-white">{formData.name}</span>
                    
                    {formData.company && (
                      <>
                        <span className="col-span-4 text-brand-acero uppercase">Empresa:</span>
                        <span className="col-span-8 text-white">{formData.company}</span>
                      </>
                    )}
                    
                    <span className="col-span-4 text-brand-acero uppercase">Teléfono:</span>
                    <span className="col-span-8 text-white">{formData.phone}</span>
                    
                    <span className="col-span-4 text-brand-acero uppercase">Email:</span>
                    <span className="col-span-8 text-white">{formData.email}</span>
                    
                    <span className="col-span-4 text-brand-acero uppercase">Asunto:</span>
                    <span className="col-span-8 text-brand-cyan font-bold">{formData.subject}</span>
                    
                    <span className="col-span-4 text-brand-acero uppercase">Mensaje:</span>
                    <p className="col-span-8 text-slate-200 leading-normal bg-brand-navy/60 p-2 rounded border border-brand-navy-light/35">{formData.message}</p>
                  </div>
                  
                  <div className="pt-2 text-[10px] text-brand-acero leading-normal">
                    * Un ingeniero idóneo de SEMCO Panamá evaluará tu caso y se comunicará a los datos proporcionados en un lapso menor de 4 horas hábiles.
                  </div>
                </div>

                <div className="flex justify-end gap-3 pt-2">
                  <button
                    onClick={handleReset}
                    className="px-5 py-2.5 bg-brand-cyan text-brand-navy font-display font-bold text-xs tracking-wider uppercase rounded hover:bg-cyan-400 active:translate-y-0.5 transition-all focus:outline-none"
                  >
                    Enviar otra solicitud
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-brand-navy-light/30 border border-brand-navy-light p-6 md:p-8 rounded-lg space-y-5" noValidate>
                <h2 className="text-lg font-display font-extrabold text-white border-b border-brand-navy-light pb-3">
                  Formulario de Contacto Técnico
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label htmlFor="form-name" className="text-xs font-mono font-bold text-slate-300 uppercase block">
                      Nombre Completo <span className="text-brand-orange">*</span>
                    </label>
                    <input
                      id="form-name"
                      type="text"
                      className={`w-full px-4 py-2.5 bg-navy-950 border rounded text-xs text-white focus:outline-none focus:ring-2 focus:ring-brand-cyan ${
                        errors.name ? "border-brand-orange" : "border-brand-navy-light/85"
                      }`}
                      placeholder="Ej. Ing. Alexis Montenegro"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                    {errors.name && <span className="text-[10px] font-mono text-brand-orange block">{errors.name}</span>}
                  </div>

                  {/* Company field */}
                  <div className="space-y-1.5">
                    <label htmlFor="form-company" className="text-xs font-mono font-bold text-slate-300 uppercase block">
                      Empresa o PH
                    </label>
                    <input
                      id="form-company"
                      type="text"
                      className="w-full px-4 py-2.5 bg-navy-950 border border-brand-navy-light/85 rounded text-xs text-white focus:outline-none focus:ring-2 focus:ring-brand-cyan"
                      placeholder="Ej. PH San Francisco Bay"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Phone field */}
                  <div className="space-y-1.5">
                    <label htmlFor="form-phone" className="text-xs font-mono font-bold text-slate-300 uppercase block">
                      Teléfono de Contacto <span className="text-brand-orange">*</span>
                    </label>
                    <input
                      id="form-phone"
                      type="tel"
                      className={`w-full px-4 py-2.5 bg-navy-950 border rounded text-xs text-white focus:outline-none focus:ring-2 focus:ring-brand-cyan ${
                        errors.phone ? "border-brand-orange" : "border-brand-navy-light/85"
                      }`}
                      placeholder="Ej. +507 6677-8899"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                    {errors.phone && <span className="text-[10px] font-mono text-brand-orange block">{errors.phone}</span>}
                  </div>

                  {/* Email field */}
                  <div className="space-y-1.5">
                    <label htmlFor="form-email" className="text-xs font-mono font-bold text-slate-300 uppercase block">
                      Correo Electrónico <span className="text-brand-orange">*</span>
                    </label>
                    <input
                      id="form-email"
                      type="email"
                      className={`w-full px-4 py-2.5 bg-navy-950 border rounded text-xs text-white focus:outline-none focus:ring-2 focus:ring-brand-cyan ${
                        errors.email ? "border-brand-orange" : "border-brand-navy-light/85"
                      }`}
                      placeholder="Ej. alexis@empresa.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                    {errors.email && <span className="text-[10px] font-mono text-brand-orange block">{errors.email}</span>}
                  </div>
                </div>

                {/* Subject selection */}
                <div className="space-y-1.5">
                  <label htmlFor="form-subject" className="text-xs font-mono font-bold text-slate-300 uppercase block">
                    Motivo de la Consulta
                  </label>
                  <select
                    id="form-subject"
                    className="w-full px-4 py-2.5 bg-navy-950 border border-brand-navy-light/85 rounded text-xs text-white focus:outline-none focus:ring-2 focus:ring-brand-cyan"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  >
                    <option value="Mantenimiento Preventivo">Mantenimiento Preventivo (Contrato)</option>
                    <option value="Mantenimiento Correctivo">Reparación o Correctivo de Emergencia</option>
                    <option value="Cotización de Obra Nueva">Cotización de Obra Nueva / Suministro</option>
                    <option value="Inspección NFPA y Certificación">Inspección NFPA y Certificación de Bomberos</option>
                    <option value="Auditoría / Gerencia de Proyectos">Auditoría / Consultoría de Proyectos</option>
                  </select>
                </div>

                {/* Message field */}
                <div className="space-y-1.5">
                  <label htmlFor="form-message" className="text-xs font-mono font-bold text-slate-300 uppercase block">
                    Especificaciones o Mensaje <span className="text-brand-orange">*</span>
                  </label>
                  <textarea
                    id="form-message"
                    rows={4}
                    className={`w-full px-4 py-2.5 bg-navy-950 border rounded text-xs text-white focus:outline-none focus:ring-2 focus:ring-brand-cyan ${
                      errors.message ? "border-brand-orange" : "border-brand-navy-light/85"
                    }`}
                    placeholder="Detalla qué sistemas posee tu edificio (bomba contra incendio, plantas, bombas de agua) y qué requieres."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                  {errors.message && <span className="text-[10px] font-mono text-brand-orange block">{errors.message}</span>}
                </div>

                {/* Submit button */}
                <div>
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-brand-cyan text-brand-navy font-display font-bold text-xs tracking-wider uppercase rounded hover:bg-cyan-400 active:translate-y-0.5 transition-all text-center flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" /> Enviar Solicitud Técnica
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Contact data & Map */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* NAP card */}
            <div className="bg-brand-navy-light/20 border border-brand-navy-light rounded-lg p-6 space-y-5">
              <div className="pb-4 border-b border-brand-navy-light/60">
                <Logo height={48} textColor="white" />
              </div>
              <h3 className="text-xs font-mono font-bold tracking-widest text-brand-cyan uppercase">
                DATOS CORPORATIVOS (NAP)
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs font-mono font-bold text-white uppercase">Oficina Sede</span>
                    <span className="text-xs text-slate-300 block mt-0.5">{COMPANY_NAP.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs font-mono font-bold text-white uppercase">Teléfono Fijo</span>
                    <a href={`tel:${COMPANY_NAP.telephoneSchema}`} className="text-xs text-slate-300 block mt-0.5 hover:text-brand-cyan transition-colors font-mono">
                      {COMPANY_NAP.telephone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs font-mono font-bold text-white uppercase">Correo Directo</span>
                    <a href={`mailto:${COMPANY_NAP.email}`} className="text-xs text-slate-300 block mt-0.5 hover:text-brand-cyan transition-colors">
                      {COMPANY_NAP.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs font-mono font-bold text-white uppercase">Horario Comercial</span>
                    <span className="text-xs text-slate-300 block mt-0.5">{COMPANY_NAP.hours}</span>
                  </div>
                </div>
              </div>

              {/* Large WhatsApp banner */}
              <div className="pt-2 border-t border-brand-navy-light/40">
                <a
                  href={COMPANY_NAP.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-green-500 hover:bg-green-600 transition-colors text-white font-display font-bold text-xs tracking-wider uppercase rounded flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 fill-current" /> Contactar vía WhatsApp
                </a>
              </div>
            </div>

            {/* Google Map Section */}
            <div className="bg-brand-navy-light/40 border border-brand-navy-light rounded-lg overflow-hidden flex flex-col">
              <div className="px-5 py-3 border-b border-brand-navy-light/60 bg-brand-navy-light/30">
                <span className="text-xs font-mono font-bold text-brand-cyan uppercase">Ubicación Georreferenciada</span>
              </div>
              <div className="h-64 w-full bg-slate-900 relative">
                {/* Embedded Accessible Google Maps Iframe focusing on Rio Abajo, Villa Rica, Panama */}
                <iframe
                  title="Ubicación de SEMCO Panamá en Rio Abajo"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m13!1d3940.8520336215347!2d-79.5015568!3d9.0061111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8faca8efcb737fcf%3A0xe6bf4dc909d85fd1!2sR%C3%ADo%20Abajo%2C%20Ciudad%20de%20Panam%C3%A1%2C%20Panam%C3%A1!5e0!3m2!1ses!2spa!4v1700000000000!5m2!1ses!2spa"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(120%) opacity(0.8)" }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  id="google-maps-frame"
                ></iframe>
                
                {/* Visual Label overlay on map */}
                <div className="absolute bottom-3 left-3 right-3 bg-navy-950/95 border border-brand-navy-light/80 rounded p-2.5 backdrop-blur-sm shadow-md text-[11px] leading-snug">
                  <span className="block font-bold text-white uppercase">SEMCO Panamá Sede</span>
                  <p className="text-slate-300">Rio Abajo, Villa Rica, Local D15. Frente a vía principal.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
