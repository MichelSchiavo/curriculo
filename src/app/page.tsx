'use client';

import { useState } from 'react';
import cvData from '../data/cv-data.json';
import translations from '../data/translations.json';

type Language = 'pt' | 'en';

interface Contact {
  email: string;
  telefone: string;
  localizacao: string;
}

interface Links {
  linkedin: string;
  github: string;
  portfolio: string;
}

interface LanguageSkill {
  idioma: string;
  nivel: string;
}

interface Experience {
  cargo: string;
  empresa: string;
  periodo: string;
  descricao: string;
}

interface Project {
  nome: string;
  url: string;
  descricao: string;
}

interface Education {
  curso: string;
  instituicao: string;
  status: string;
}

interface CVData {
  nome_completo: string;
  titulo_profissional: string;
  contato: Contact;
  links: Links;
  habilidades_tecnicas: string[];
  idiomas: LanguageSkill[];
  experiencia_profissional: Experience[];
  projetos_destaque: Project[];
  formacao_academica: Education[];
  competencias_pessoais: string[];
}

interface Translations {
  personal_info: string;
  contact: string;
  technical_skills: string;
  languages: string;
  professional_experience: string;
  featured_projects: string;
  education: string;
  personal_skills: string;
  download_pdf: string;
  view_project: string;
  currently_studying: string;
  native: string;
  intermediate: string;
  advanced: string;
  beginner: string;
}

export default function Home() {
  const [language, setLanguage] = useState<'pt' | 'en'>('pt');
  
  const data: CVData = (cvData as any)[language];
  const t: Translations = (translations as any)[language];

  const toggleLanguage = () => {
    setLanguage(language === 'pt' ? 'en' : 'pt');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header with Language Toggle */}
      <header className="sticky top-0 bg-white/80 backdrop-blur-sm shadow-sm z-10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-800">Currículo / Resume</h1>
          <button
            onClick={toggleLanguage}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors font-medium"
          >
            {language === 'pt' ? 'EN' : 'PT'}
          </button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Personal Information */}
        <section className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="w-32 h-32 bg-gradient-to-br from-indigo-400 to-blue-500 rounded-full flex items-center justify-center text-white text-4xl font-bold">
              {data.nome_completo.split(' ').map((name: string) => name[0]).join('').slice(0, 2)}
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                {data.nome_completo}
              </h1>
              <h2 className="text-xl text-indigo-600 font-semibold mb-4">
                {data.titulo_profissional}
              </h2>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 text-gray-600">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                  <a href={`mailto:${data.contato.email}`} className="hover:text-indigo-600 transition-colors">
                    {data.contato.email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                  <span>{data.contato.localizacao}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                  <span>{data.contato.telefone}</span>
                </div>
              </div>
              <div className="flex justify-center md:justify-start gap-4 mt-4">
                <a
                  href={data.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href={data.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  GitHub
                </a>
                <a
                  href={data.links.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  Portfolio
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-1 space-y-6">
            {/* Technical Skills */}
            <section className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                </svg>
                {t.technical_skills}
              </h3>
              <div className="flex flex-wrap gap-2">
                {data.habilidades_tecnicas.map((skill: string, index: number) => (
                  <span
                    key={index}
                    className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            {/* Languages */}
            <section className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389c-.188-.196-.373-.396-.554-.6a19.098 19.098 0 01-3.107 3.567 1 1 0 01-1.334-1.49 17.087 17.087 0 003.13-3.733 18.992 18.992 0 01-1.487-2.494 1 1 0 111.79-.89c.234.47.489.928.764 1.372.417-.934.752-1.913.997-2.927H3a1 1 0 110-2h3V3a1 1 0 011-1zm6 6a1 1 0 01.894.553l2.991 5.982a.869.869 0 01.02.037l.99 1.98a1 1 0 11-1.79.895L15.383 16h-4.764l-.724 1.447a1 1 0 11-1.788-.894l.99-1.98.019-.038 2.99-5.982A1 1 0 0113 8zm-1.382 6h2.764L13 12.236 11.618 14z" clipRule="evenodd"/>
                </svg>
                {t.languages}
              </h3>
              <div className="space-y-3">
                {data.idiomas.map((idioma: LanguageSkill, index: number) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">{idioma.idioma}</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                      {idioma.nivel}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Personal Skills */}
            <section className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                {t.personal_skills}
              </h3>
              <ul className="space-y-2">
                {data.competencias_pessoais.map((competencia: string, index: number) => (
                  <li key={index} className="flex items-center gap-2 text-gray-700">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                    {competencia}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Professional Experience */}
            <section className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <svg className="w-7 h-7 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h2zm4-3a1 1 0 00-1 1v1h2V4a1 1 0 00-1-1zM4 9v5h12V9H4z" clipRule="evenodd"/>
                </svg>
                {t.professional_experience}
              </h3>
              <div className="space-y-6">
                {data.experiencia_profissional.map((exp: Experience, index: number) => (
                  <div key={index} className="border-l-4 border-indigo-600 pl-6 relative">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-indigo-600 rounded-full"></div>
                    <h4 className="text-lg font-semibold text-gray-800">{exp.cargo}</h4>
                    <h5 className="text-indigo-600 font-medium">{exp.empresa}</h5>
                    <p className="text-gray-600 text-sm mb-2">{exp.periodo}</p>
                    <p className="text-gray-700">{exp.descricao}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Featured Projects */}
            <section className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <svg className="w-7 h-7 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15.586 13H14a1 1 0 01-1-1z" clipRule="evenodd"/>
                </svg>
                {t.featured_projects}
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {data.projetos_destaque.map((projeto: Project, index: number) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">{projeto.nome}</h4>
                    <p className="text-gray-600 text-sm mb-3">{projeto.descricao}</p>
                    <a
                      href={projeto.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium text-sm"
                    >
                      {t.view_project}
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                      </svg>
                    </a>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <svg className="w-7 h-7 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                </svg>
                {t.education}
              </h3>
              <div className="space-y-4">
                {data.formacao_academica.map((formacao: Education, index: number) => (
                  <div key={index} className="border-l-4 border-green-500 pl-6 relative">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-green-500 rounded-full"></div>
                    <h4 className="text-lg font-semibold text-gray-800">{formacao.curso}</h4>
                    <h5 className="text-green-600 font-medium">{formacao.instituicao}</h5>
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">
                      {formacao.status}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
