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
    <div className="w-full bg-brand-navy text-brand-text-light pb-28 noise-texture" id="contact-view">
      
      {/* Page Header */}
      <section className="bg-navy-950 border-b border-brand-navy-light/40 py-24 md:py-32 blueprint-grid overflow-hidden relative">
        <div className="absolute top-1/4 right-1/4 w-[350px] h-[350px] bg-brand-cyan/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-xs font-mono font-bold tracking-widest text-brand-cyan uppercase block mb-3">
            CANALES DE ATENCIÓN DIRECTA
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-extrabold text-white tracking-tighter leading-[0.95] text-balance">
            Contáctanos
          </h1>
          <p className="text-base sm:text-lg text-slate-300/90 leading-relaxed mt-6 max-w-3xl font-light">
            Cuéntanos sobre tu proyecto o el sistema que necesitas mantener. Te respondemos a la brevedad con un ingeniero idóneo.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Form / Success Ticket */}
          <div className="lg:col-span-7">
            {isSubmitted ? (
              <div className="bg-navy-950 border border-brand-cyan/40 p-8 sm:p-12 rounded-2xl space-y-8 relative overflow-hidden blueprint-grid shadow-2xl">
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-cyan/5 rounded-full blur-xl pointer-events-none"></div>
                
                <div className="flex items-center gap-4 border-b border-brand-navy-light/40 pb-6">
                  <div className="p-3 bg-brand-cyan/15 rounded-full border border-brand-cyan/20">
                    <CheckCircle className="w-8 h-8 text-brand-cyan" />
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tighter">¡Solicitud recibida con éxito!</h2>
                    <span className="text-xs font-mono text-brand-cyan tracking-wider block mt-1 font-semibold">{ticketId}</span>
                  </div>
                </div>

                {/* Simulated service ticket detail */}
                <div className="p-6 sm:p-8 bg-brand-navy-light/15 border border-brand-navy-light/60 rounded-xl font-mono text-xs sm:text-sm space-y-4">
                  <div className="text-center text-brand-cyan font-bold pb-3 border-b border-brand-navy-light/60 tracking-wider">
                    TICKET DE SOLICITUD ELECTROMECÁNICA
                  </div>
                  <div className="grid grid-cols-12 gap-y-3.5 gap-x-2 text-slate-300">
                    <span className="col-span-4 text-brand-acero uppercase font-bold text-xs tracking-wider">Remitente:</span>
                    <span className="col-span-8 text-white font-semibold">{formData.name}</span>
                    
                    {formData.company && (
                      <>
                        <span className="col-span-4 text-brand-acero uppercase font-bold text-xs tracking-wider">Empresa:</span>
                        <span className="col-span-8 text-white font-semibold">{formData.company}</span>
                      </>
                    )}
                    
                    <span className="col-span-4 text-brand-acero uppercase font-bold text-xs tracking-wider">Teléfono:</span>
                    <span className="col-span-8 text-white font-semibold">{formData.phone}</span>
                    
                    <span className="col-span-4 text-brand-acero uppercase font-bold text-xs tracking-wider">Email:</span>
                    <span className="col-span-8 text-white font-semibold">{formData.email}</span>
                    
                    <span className="col-span-4 text-brand-acero uppercase font-bold text-xs tracking-wider">Asunto:</span>
                    <span className="col-span-8 text-brand-cyan font-bold">{formData.subject}</span>
                    
                    <span className="col-span-4 text-brand-acero uppercase font-bold text-xs tracking-wider">Mensaje:</span>
                    <div className="col-span-8 text-slate-200 leading-normal bg-brand-navy/60 p-3 rounded-lg border border-brand-navy-light/35">{formData.message}</div>
                  </div>
                  
                  <div className="pt-4 text-xs text-brand-acero leading-relaxed border-t border-brand-navy-light/40">
                    * Un ingeniero idóneo de SEMCO Panamá evaluará tu caso y se comunicará a los datos proporcionados en un lapso menor de 4 horas hábiles.
                  </div>
                </div>

                <div className="flex justify-end pt-2">
                  <button
                    onClick={handleReset}
                    className="px-8 py-4 bg-brand-cyan text-brand-navy font-display font-bold text-xs tracking-wider uppercase rounded-full hover:bg-cyan-400 active:translate-y-0.5 transition-all cursor-pointer shadow-lg shadow-brand-cyan/25"
                  >
                    Enviar otra solicitud
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-brand-navy-light/15 border border-brand-navy-light/60 p-6 sm:p-10 rounded-2xl space-y-6 shadow-xl" noValidate>
                <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white border-b border-brand-navy-light/40 pb-6 tracking-tighter">
                  Formulario de Contacto Técnico
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="space-y-2">
                    <label htmlFor="form-name" className="text-xs font-mono font-bold text-slate-300 uppercase block tracking-wider">
                      Nombre Completo <span className="text-brand-orange font-bold">*</span>
                    </label>
                    <input
                      id="form-name"
                      type="text"
                      className={`w-full px-4 py-3 bg-navy-950 border text-xs sm:text-sm text-white focus:outline-none focus:ring-2 focus:ring-brand-cyan rounded-xl transition-all ${
                        errors.name ? "border-brand-orange" : "border-brand-navy-light/80 hover:border-brand-cyan/40"
                      }`}
                      placeholder="Ej. Ing. Alexis Montenegro"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                    {errors.name && <span className="text-xs font-mono text-brand-orange block">{errors.name}</span>}
                  </div>

                  {/* Company field */}
                  <div className="space-y-2">
                    <label htmlFor="form-company" className="text-xs font-mono font-bold text-slate-300 uppercase block tracking-wider">
                      Empresa o PH
                    </label>
                    <input
                      id="form-company"
                      type="text"
                      className="w-full px-4 py-3 bg-navy-950 border border-brand-navy-light/80 hover:border-brand-cyan/40 rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:ring-2 focus:ring-brand-cyan transition-all"
                      placeholder="Ej. PH San Francisco Bay"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Phone field */}
                  <div className="space-y-2">
                    <label htmlFor="form-phone" className="text-xs font-mono font-bold text-slate-300 uppercase block tracking-wider">
                      Teléfono de Contacto <span className="text-brand-orange font-bold">*</span>
                    </label>
                    <input
                      id="form-phone"
                      type="tel"
                      className={`w-full px-4 py-3 bg-navy-950 border text-xs sm:text-sm text-white focus:outline-none focus:ring-2 focus:ring-brand-cyan rounded-xl transition-all ${
                        errors.phone ? "border-brand-orange" : "border-brand-navy-light/80 hover:border-brand-cyan/40"
                      }`}
                      placeholder="Ej. +507 6677-8899"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                    {errors.phone && <span className="text-xs font-mono text-brand-orange block">{errors.phone}</span>}
                  </div>

                  {/* Email field */}
                  <div className="space-y-2">
                    <label htmlFor="form-email" className="text-xs font-mono font-bold text-slate-300 uppercase block tracking-wider">
                      Correo Electrónico <span className="text-brand-orange font-bold">*</span>
                    </label>
                    <input
                      id="form-email"
                      type="email"
                      className={`w-full px-4 py-3 bg-navy-950 border text-xs sm:text-sm text-white focus:outline-none focus:ring-2 focus:ring-brand-cyan rounded-xl transition-all ${
                        errors.email ? "border-brand-orange" : "border-brand-navy-light/80 hover:border-brand-cyan/40"
                      }`}
                      placeholder="Ej. alexis@empresa.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                    {errors.email && <span className="text-xs font-mono text-brand-orange block">{errors.email}</span>}
                  </div>
                </div>

                {/* Subject selection */}
                <div className="space-y-2">
                  <label htmlFor="form-subject" className="text-xs font-mono font-bold text-slate-300 uppercase block tracking-wider">
                    Motivo de la Consulta
                  </label>
                  <select
                    id="form-subject"
                    className="w-full px-4 py-3.5 bg-navy-950 border border-brand-navy-light/80 hover:border-brand-cyan/40 rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:ring-2 focus:ring-brand-cyan transition-all"
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
                <div className="space-y-2">
                  <label htmlFor="form-message" className="text-xs font-mono font-bold text-slate-300 uppercase block tracking-wider">
                    Especificaciones o Mensaje <span className="text-brand-orange font-bold">*</span>
                  </label>
                  <textarea
                    id="form-message"
                    rows={4}
                    className={`w-full px-4 py-3 bg-navy-950 border text-xs sm:text-sm text-white focus:outline-none focus:ring-2 focus:ring-brand-cyan rounded-xl transition-all ${
                      errors.message ? "border-brand-orange" : "border-brand-navy-light/80 hover:border-brand-cyan/40"
                    }`}
                    placeholder="Detalla qué sistemas posee tu edificio (bomba contra incendio, plantas, bombas de agua) y qué requieres."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                  {errors.message && <span className="text-xs font-mono text-brand-orange block">{errors.message}</span>}
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4.5 bg-brand-cyan text-brand-navy font-display font-bold text-xs tracking-wider uppercase rounded-full hover:bg-cyan-400 hover:shadow-cyan-400/20 active:translate-y-0.5 transition-all text-center flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-brand-cyan/15"
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
            <div className="bg-brand-navy-light/15 border border-brand-navy-light/60 rounded-2xl p-6 sm:p-8 space-y-6">
              <div className="pb-5 border-b border-brand-navy-light/40">
                <Logo height={48} textColor="white" />
              </div>
              <h3 className="text-xs font-mono font-bold tracking-widest text-brand-cyan uppercase">
                DATOS CORPORATIVOS (NAP)
              </h3>
              
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs font-mono font-bold text-white uppercase tracking-wider">Oficina Sede</span>
                    <span className="text-sm text-slate-300 block mt-1 leading-relaxed font-light">{COMPANY_NAP.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs font-mono font-bold text-white uppercase tracking-wider">Teléfono Fijo</span>
                    <a href={`tel:${COMPANY_NAP.telephoneSchema}`} className="text-sm text-slate-300 block mt-1 hover:text-brand-cyan transition-colors font-mono font-light">
                      {COMPANY_NAP.telephone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs font-mono font-bold text-white uppercase tracking-wider">Correo Directo</span>
                    <a href={`mailto:${COMPANY_NAP.email}`} className="text-sm text-slate-300 block mt-1 hover:text-brand-cyan transition-colors font-light">
                      {COMPANY_NAP.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs font-mono font-bold text-white uppercase tracking-wider">Horario Comercial</span>
                    <span className="text-sm text-slate-300 block mt-1 font-light">{COMPANY_NAP.hours}</span>
                  </div>
                </div>
              </div>

              {/* Large WhatsApp banner */}
              <div className="pt-4 border-t border-brand-navy-light/40">
                <a
                  href={COMPANY_NAP.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-green-500 hover:bg-green-600 transition-colors text-white font-display font-bold text-xs tracking-wider uppercase rounded-full flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-green-500/10"
                >
                  <MessageSquare className="w-4 h-4 fill-current" /> Contactar vía WhatsApp
                </a>
              </div>
            </div>

            {/* Google Map Section */}
            <div className="bg-brand-navy-light/15 border border-brand-navy-light/60 rounded-2xl overflow-hidden flex flex-col shadow-xl">
              <div className="px-6 py-4 border-b border-brand-navy-light/40 bg-brand-navy-light/30">
                <span className="text-xs font-mono font-bold text-brand-cyan uppercase tracking-wider">Ubicación Georreferenciada</span>
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
                <div className="absolute bottom-4 left-4 right-4 bg-navy-950/95 border border-brand-navy-light/80 rounded-xl p-3.5 backdrop-blur-sm shadow-xl text-xs leading-relaxed">
                  <span className="block font-bold text-white uppercase tracking-wider">SEMCO Panamá Sede</span>
                  <p className="text-slate-300 mt-0.5 font-light">Rio Abajo, Villa Rica, Local D15. Frente a vía principal.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}

