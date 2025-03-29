import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { NextResponse } from 'next/server'; 

let firebaseAdminInitialized = false;
if (!firebaseAdminInitialized) {
  try {
    const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);
    initializeApp({
      credential: cert(serviceAccount)
    });
    firebaseAdminInitialized = true;
    console.log('Firebase Admin SDK initialized successfully');
  } catch (error) {
    console.error('Error initializing Firebase Admin SDK:', error);
  }
}

const db = getFirestore();

export async function POST(req) {
  try {
    const appointmentData = await req.json();
    const docRef = await db.collection('appointments').add(appointmentData);
    return NextResponse.json({ message: 'Appointment booked successfully', appointmentId: docRef.id }, { status: 200 });
  } catch (error) {
    console.error('Error adding document: ', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
