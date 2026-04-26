'use client';

import { useState } from 'react';
import { EnvelopeIcon, PhoneIcon, UserIcon, ChatBubbleLeftEllipsisIcon, ExclamationCircleIcon } from '@heroicons/react/24/solid';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });

    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [messageError, setMessageError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        
        // Aplica a máscara em tempo real apenas se for o campo de telefone
        if (name === 'phone') {
            let v = value.replace(/\D/g, ""); // Remove tudo que não for dígito
            if (v.length > 11) v = v.substring(0, 11); // Limita a 11 dígitos
            
            // Aplica a formatação adequada para 10 ou 11 dígitos
            if (v.length <= 10) {
                v = v.replace(/(\d{2})(\d)/, "($1) $2");
                v = v.replace(/(\d{4})(\d)/, "$1-$2");
            } else {
                v = v.replace(/(\d{2})(\d)/, "($1) $2");
                v = v.replace(/(\d{5})(\d)/, "$1-$2");
            }
            
            setFormData(prev => ({ ...prev, phone: v }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handlePhoneBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        if (!e.target.value.trim()) {
            setPhoneError("O preenchimento do Telefone é obrigatório!");
            return;
        }

        // Conta apenas os números reais retirando a máscara
        const rawNumbers = e.target.value.replace(/\D/g, "");
        
        // Se a pessoa preencheu alguma coisa, mas não deu no mínimo 10 números (Ex: (31) 3453-8599)
        if (rawNumbers.length > 0 && rawNumbers.length < 10) {
            setPhoneError("Favor inserir um telefone válido com DDD!");
        } else {
            setPhoneError("");
        }
    };

    const handleEmailBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        if (!e.target.value.trim()) {
            setEmailError("O preenchimento do E-mail é obrigatório!");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // Só dispara o erro se o usuário tiver digitado algo, mas estiver num formato inválido
        if (e.target.value && !emailRegex.test(e.target.value)) {
            setEmailError("Favor inserir um e-mail válido!");
        } else {
            setEmailError("");
        }
    };

    const handleNameBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        if (!e.target.value.trim()) {
            setNameError("O preenchimento do Nome é obrigatório!");
        } else {
            setNameError("");
        }
    };

    const handleMessageBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
        if (!e.target.value.trim()) {
            setMessageError("O preenchimento da Mensagem é obrigatório!");
        } else {
            setMessageError("");
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || 'Erro ao enviar mensagem');
            }

            setStatus('success');
            setFormData({ name: '', phone: '', email: '', message: '' });
        } catch (error: any) {
            console.error('Erro no formulário:', error);
            setStatus('error');
            setErrorMessage(error.message || 'Ocorreu um erro ao enviar sua mensagem. Tente novamente mais tarde.');
        }
    };

    if (status === 'success') {
        return (
            <div className="w-full h-full flex flex-col">
                <div className="bg-color-white p-6 sm:p-8 rounded-2xl shadow-lg border border-green-500 text-center space-y-4 animate-in fade-in zoom-in duration-500 flex-grow flex flex-col items-center justify-center">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h3 className="font-family-title text-2xl font-bold text-color-primary">E-mail Enviado!</h3>
                    <p className="font-family-body text-color-muted">Sua mensagem foi entregue com sucesso. Em breve retornaremos o seu contato.</p>
                    <button
                        onClick={() => setStatus('idle')}
                        className="mt-6 px-8 py-3 bg-color-primary text-color-white font-family-title font-bold rounded-lg hover:bg-color-accent hover:text-color-primary transition-all"
                    >
                        Enviar outra mensagem
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full h-full flex flex-col">
            <form onSubmit={handleSubmit} className="bg-color-white p-6 sm:p-8 rounded-2xl shadow-lg border border-color-border/20 flex flex-col h-full">
                <div className="mb-6">
                    <h2 className="font-family-title text-2xl font-bold text-color-primary mb-2">Solicite um Orçamento</h2>
                    <p className="font-family-body text-color-muted text-sm">Preencha os campos abaixo e entraremos em contato o mais breve possível.</p>
                </div>

                <div className="space-y-4 flex-grow flex flex-col">
                    {/* Nome */}
                    <div className="space-y-1">
                        <label htmlFor="name" className="block font-family-title text-xs font-bold text-color-primary uppercase tracking-wider">
                            Nome Completo <span className="text-color-accent">*</span>
                        </label>
                        <div className="relative group">
                            <UserIcon className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${nameError ? 'text-red-500' : 'text-color-muted group-focus-within:text-color-accent'}`} />
                            <input
                                required
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={(e) => {
                                    handleChange(e);
                                    if (nameError) setNameError('');
                                }}
                                onBlur={handleNameBlur}
                                className={`w-full pl-10 pr-4 py-3 bg-color-surface-alt/20 border-2 rounded-xl outline-none font-family-body text-sm transition-all ${nameError ? 'border-red-400 focus:border-red-500 text-red-900 bg-red-50' : 'border-color-border/10 focus:border-color-accent text-color-primary'}`}
                                placeholder="Seu nome"
                            />
                        </div>
                        {nameError && (
                            <p className="text-xs text-red-500 font-family-body mt-1 animate-in slide-in-from-top-1 fade-in font-medium flex items-center gap-1">
                                <ExclamationCircleIcon className="w-3 h-3" />
                                {nameError}
                            </p>
                        )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Telefone */}
                        <div className="space-y-1">
                            <label htmlFor="phone" className="block font-family-title text-xs font-bold text-color-primary uppercase tracking-wider">
                                Telefone / WhatsApp <span className="text-color-accent">*</span>
                            </label>
                            <div className="relative group">
                                <PhoneIcon className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${phoneError ? 'text-red-500' : 'text-color-muted group-focus-within:text-color-accent'}`} />
                                <input
                                    required
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={(e) => {
                                        handleChange(e);
                                        if (phoneError) setPhoneError('');
                                    }}
                                    onBlur={handlePhoneBlur}
                                    maxLength={15} // (XX) XXXXX-XXXX
                                    className={`w-full pl-10 pr-4 py-3 bg-color-surface-alt/20 border-2 rounded-xl outline-none font-family-body text-sm transition-all ${phoneError ? 'border-red-400 focus:border-red-500 text-red-900 bg-red-50' : 'border-color-border/10 focus:border-color-accent text-color-primary'}`}
                                    placeholder="(00) 00000-0000"
                                />
                            </div>
                            {phoneError && (
                                <p className="text-xs text-red-500 font-family-body mt-1 animate-in slide-in-from-top-1 fade-in font-medium flex items-center gap-1">
                                    <ExclamationCircleIcon className="w-3 h-3" />
                                    {phoneError}
                                </p>
                            )}
                        </div>

                        {/* E-mail */}
                        <div className="space-y-1">
                            <label htmlFor="email" className="block font-family-title text-xs font-bold text-color-primary uppercase tracking-wider">
                                E-mail <span className="text-color-accent">*</span>
                            </label>
                            <div className="relative group">
                                <EnvelopeIcon className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${emailError ? 'text-red-500' : 'text-color-muted group-focus-within:text-color-accent'}`} />
                                <input
                                    required
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={(e) => {
                                        handleChange(e);
                                        if (emailError) setEmailError('');
                                    }}
                                    onBlur={handleEmailBlur}
                                    className={`w-full pl-10 pr-4 py-3 bg-color-surface-alt/20 border-2 rounded-xl outline-none font-family-body text-sm transition-all ${emailError ? 'border-red-400 focus:border-red-500 text-red-900 bg-red-50' : 'border-color-border/10 focus:border-color-accent text-color-primary'}`}
                                    placeholder="seu@email.com"
                                />
                            </div>
                            {emailError && (
                                <p className="text-xs text-red-500 font-family-body mt-1 animate-in slide-in-from-top-1 fade-in font-medium flex items-center gap-1">
                                    <ExclamationCircleIcon className="w-3 h-3" />
                                    {emailError}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Mensagem */}
                    <div className="space-y-1 flex-grow flex flex-col">
                        <label htmlFor="message" className="block font-family-title text-xs font-bold text-color-primary uppercase tracking-wider">
                            Sua Mensagem <span className="text-color-accent">*</span>
                        </label>
                        <div className="relative group flex-grow flex flex-col">
                            <ChatBubbleLeftEllipsisIcon className={`absolute left-3 top-3 w-5 h-5 transition-colors ${messageError ? 'text-red-500' : 'text-color-muted group-focus-within:text-color-accent'}`} />
                            <textarea
                                required
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={(e) => {
                                    handleChange(e);
                                    if (messageError) setMessageError('');
                                }}
                                onBlur={handleMessageBlur}
                                className={`w-full pl-10 pr-4 py-3 bg-color-surface-alt/20 border-2 rounded-xl outline-none font-family-body text-sm transition-all resize-none flex-grow ${messageError ? 'border-red-400 focus:border-red-500 text-red-900 bg-red-50' : 'border-color-border/10 focus:border-color-accent text-color-primary'}`}
                                placeholder="Descreva seu projeto ou dúvida..."
                            />
                        </div>
                        {messageError && (
                            <p className="text-xs text-red-500 font-family-body mt-1 animate-in slide-in-from-top-1 fade-in font-medium flex items-center gap-1">
                                <ExclamationCircleIcon className="w-3 h-3" />
                                {messageError}
                            </p>
                        )}
                    </div>
                </div>

                {status === 'error' && (
                    <div className="p-4 bg-red-50/80 border-l-4 border-red-500 rounded-r-xl mt-4 flex items-center gap-3 animate-in fade-in slide-in-from-left-2 shadow-sm">
                        <ExclamationCircleIcon className="w-6 h-6 text-red-500 shrink-0" />
                        <p className="text-sm text-red-700 font-family-body font-medium">{errorMessage}</p>
                    </div>
                )}

                <div className="mt-6">
                    <button
                        disabled={status === 'loading'}
                        type="submit"
                        className="w-full py-4 bg-color-primary text-color-white font-family-title font-bold rounded-lg hover:bg-color-accent hover:text-color-primary transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
                    >
                        {status === 'loading' ? (
                            <>
                                <div className="w-5 h-5 border-2 border-color-white border-t-transparent rounded-full animate-spin" />
                                <span>Enviando...</span>
                            </>
                        ) : (
                            <>
                                <span>Enviar Solicitação</span>
                                <EnvelopeIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </>
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
}