import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const body = await request.json();
        const { email } = body;

        if (!email) {
            return NextResponse.json({ error: 'Email is required' }, { status: 400 });
        }

        // TODO: Integrate with Google Sheets or Email Service
        // For now, we'll log it to the console
        console.log('Waitlist Submission:', email);

        // Placeholder for Google Sheets API call
        // const response = await fetch('GOOGLE_SHEETS_API_URL', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify({ email, timestamp: new Date().toISOString() }),
        // });

        return NextResponse.json({ message: 'Successfully joined waitlist' }, { status: 200 });
    } catch (error) {
        console.error('Waitlist Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
