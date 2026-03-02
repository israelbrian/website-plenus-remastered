'use client';

import { useState } from 'react';
import { EnvelopeIcon, PhoneIcon, UserIcon, ChatBubbleLeftEllipsisIcon } from '@heroicons/react/24/solid';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });

    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
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
                            Nome Completo
                        </label>
                        <div className="relative group">
                            <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-color-muted group-focus-within:text-color-accent transition-colors" />
                            <input
                                required
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full pl-10 pr-4 py-3 bg-color-surface-alt/20 border-2 border-color-border/10 rounded-xl focus:border-color-accent outline-none font-family-body text-color-primary text-sm transition-all"
                                placeholder="Seu nome"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Telefone */}
                        <div className="space-y-1">
                            <label htmlFor="phone" className="block font-family-title text-xs font-bold text-color-primary uppercase tracking-wider">
                                Telefone / WhatsApp
                            </label>
                            <div className="relative group">
                                <PhoneIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-color-muted group-focus-within:text-color-accent transition-colors" />
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full pl-10 pr-4 py-3 bg-color-surface-alt/20 border-2 border-color-border/10 rounded-xl focus:border-color-accent outline-none font-family-body text-color-primary text-sm transition-all"
                                    placeholder="(00) 00000-0000"
                                />
                            </div>
                        </div>

                        {/* E-mail */}
                        <div className="space-y-1">
                            <label htmlFor="email" className="block font-family-title text-xs font-bold text-color-primary uppercase tracking-wider">
                                E-mail
                            </label>
                            <div className="relative group">
                                <EnvelopeIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-color-muted group-focus-within:text-color-accent transition-colors" />
                                <input
                                    required
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full pl-10 pr-4 py-3 bg-color-surface-alt/20 border-2 border-color-border/10 rounded-xl focus:border-color-accent outline-none font-family-body text-color-primary text-sm transition-all"
                                    placeholder="seu@email.com"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Mensagem */}
                    <div className="space-y-1 flex-grow flex flex-col">
                        <label htmlFor="message" className="block font-family-title text-xs font-bold text-color-primary uppercase tracking-wider">
                            Sua Mensagem
                        </label>
                        <div className="relative group flex-grow flex flex-col">
                            <ChatBubbleLeftEllipsisIcon className="absolute left-3 top-3 w-5 h-5 text-color-muted group-focus-within:text-color-accent transition-colors" />
                            <textarea
                                required
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full pl-10 pr-4 py-3 bg-color-surface-alt/20 border-2 border-color-border/10 rounded-xl focus:border-color-accent outline-none font-family-body text-color-primary text-sm transition-all resize-none flex-grow"
                                placeholder="Descreva seu projeto ou dúvida..."
                            />
                        </div>
                    </div>
                </div>

                {status === 'error' && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg mt-4">
                        <p className="text-sm text-red-600 font-family-body">{errorMessage}</p>
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