import { Resend } from 'resend';
import { NextResponse } from 'next/server';
export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
    // 2. Trava de Segurança: Verifica se a Cloudflare injetou a chave corretamente
    const apiKey = process.env.RESEND_API_KEY;
    // const resend = new Resend(process.env.RESEND_API_KEY);
    if (!apiKey) {
        console.error('ERRO CRÍTICO: Chave de API do Resend não encontrada no ambiente (process.env.RESEND_API_KEY está vazio).');
        return NextResponse.json(
            { error: 'Erro de configuração do servidor. A API Key do Resend não foi injetada.' },
            { status: 500 }
        );
    }
    // 3. Inicializa o Resend com a chave garantida
    const resend = new Resend(apiKey);

    try {
        const { name, phone, email, message } = await request.json();

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Campos obrigatórios faltando' },
                { status: 400 }
            );
        }

        const { data, error } = await resend.emails.send({
            from: 'Plenus Planejados <onboarding@resend.dev>', // No ambiente real, usar um domínio verificado
            to: ['zdesenhos@gmail.com'],
            subject: `Novo Orçamento/Contato via Site - ${name}`,
            html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #c4c0ab; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #141410; padding: 20px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px; text-transform: uppercase; letter-spacing: 2px;">Plenus Planejados</h1>
          </div>
          <div style="padding: 30px; background-color: #ffffff;">
            <h2 style="color: #141410; margin-top: 0;">Novo Contato Recebido</h2>
            <p style="color: #4f4d46; line-height: 1.6;">Você recebeu uma nova solicitação de orçamento através do formulário de contato do site.</p>
            
            <div style="margin-top: 30px; border-top: 1px solid #ede8d0; padding-top: 20px;">
              <p><strong>Nome:</strong> ${name}</p>
              <p><strong>E-mail:</strong> ${email}</p>
              <p><strong>Telefone/WhatsApp:</strong> ${phone || 'Não informado'}</p>
            </div>
            
            <div style="margin-top: 20px; background-color: #ede8d0; padding: 20px; border-radius: 8px;">
              <p style="margin-top: 0; font-weight: bold; color: #141410;">Mensagem:</p>
              <p style="color: #4f4d46; margin-bottom: 0; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
          <div style="background-color: #f4f4f4; padding: 15px; text-align: center; font-size: 12px; color: #777567;">
            Este e-mail foi gerado automaticamente pelo sistema de contato da Plenus Planejados.
          </div>
        </div>
      `,
        });

        if (error) {
            console.error('Erro ao enviar e-mail:', error);
            return NextResponse.json({ error }, { status: 500 });
        }

        return NextResponse.json({ success: true, data });
    } catch (error) {
        console.error('Erro interno:', error);
        return NextResponse.json({ error: 'Erro interno no servidor' }, { status: 500 });
    }
}
