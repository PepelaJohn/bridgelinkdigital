import { NextRequest, NextResponse } from 'next/server';
import { dbConnect } from '@/src/lib/db';
import Subscriber from '@/src/models/Subscriber';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const token = searchParams.get('token');

    if (!token) {
      return NextResponse.json(
        { error: 'Unsubscribe token is required' },
        { status: 400 }
      );
    }

    // Connect to database
    await dbConnect();

    // Find and delete subscriber by token
    const deletedSubscriber = await Subscriber.findOneAndDelete({
      unsubscribeToken: token,
    });

    if (!deletedSubscriber) {
      return NextResponse.json(
        { error: 'Invalid or expired unsubscribe token' },
        { status: 404 }
      );
    }

    // Redirect to success page
    return NextResponse.redirect(new URL('/unsubscribe-success', request.url));
  } catch (error) {
    console.error('Unsubscribe error:', error);
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}

//one click unsubscribe
export async function POST(request: NextRequest) {
  return GET(request);
}
