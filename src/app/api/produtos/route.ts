import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  // Dentro de API Routes, process.env funciona no OpenNext/Cloudflare
  const API_URL = process.env.PLENUS_API_URL || process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8787';
  const API_KEY = process.env.INTERNAL_API_KEY || '';

  try {
    const res = await fetch(`${API_URL}/produtos`, {
      headers: { 'x-api-key': API_KEY },
    });

    if (!res.ok) {
      console.error(`[API PROXY] Erro: ${res.status} ${res.statusText}`);
      return NextResponse.json([], { status: res.status });
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('[API PROXY] Falha na conexão:', error);
    return NextResponse.json([]);
  }
}
