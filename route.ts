import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js'; // ← typo corrigido: supabase-js

// Inicializa o cliente do Supabase puxando as variáveis da Vercel
const supabaseUrl    = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function POST(request: Request) {
  try {
    const { email, lang = 'en' } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    const { error } = await supabase
      .from('waitlist')
      .insert([{ email: email.toLowerCase().trim(), lang }]);

    if (error) {
      // Trata e-mail duplicado de forma amigável — retorna sucesso silencioso
      if (error.code === '23505') {
        return NextResponse.json({ message: 'Already registered' }, { status: 200 });
      }
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ message: 'Success' }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
