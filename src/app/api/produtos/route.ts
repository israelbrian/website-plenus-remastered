import { NextResponse } from 'next/server';
import { getCloudflareContext } from '@opennextjs/cloudflare';

export const dynamic = 'force-dynamic';

export async function GET() {
  let API_URL = process.env.PLENUS_API_URL || process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8787';
  let API_KEY = process.env.INTERNAL_API_KEY || '';

  try {
    const cf = await getCloudflareContext({ async: true });
    if (cf?.env) {
      API_URL = (cf.env as any).PLENUS_API_URL || API_URL;
      API_KEY = (cf.env as any).INTERNAL_API_KEY || API_KEY;
    }
  } catch {
    // Fallback para ambiente local
  }

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
