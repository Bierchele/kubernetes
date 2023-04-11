//@typescript-eslint/parser.
import http from 'k6/http';
// vielleichz muss das in ein separates repo
// ich glaub
// bruuuuh junge dann mach ein neues projekt mit nodemon und typescript compiler obwohl nein
// aber ja aber nein aber ja aber nein
const API_URL = 'http://localhost:3000';

// hä wtf ich hatte voll viel umgeschrieben

export function createEvents() {
  const randomUUID = Math.random().toString(32).slice(2);
  // wtf bei mir läuft der nicgt
  // junge bei mir läuft der test immer noch
  // das fickt dein mac jetzt bro
  // klappt jetzt?
  // nein 1000 error
  // ja dann blockt nest das aber mit 10 eben hat der das gemacht ohne spaß
  // lass morgen machen
  // oki

  /// / terminal geht aber nicht mehr bei mir ich sehe die ausgtabe nicht m erh
  // Bro mach einfach ein neues terminal auf ju
  const payload = JSON.stringify({
    id: randomUUID,
    title: title,
    date: date,
    deleted: false,
    streetName: 'Müllerstraße',
    streetNumber: '18',
    postalcode: '51147',
    city: 'Kölle',
    country: 'DE',
  });

  http.post(API_URL + '/events', payload, {
    headers: { 'Content-Type': 'application/json' },
    payload,
  });
  // alter du gaylord
}

export default function () {
  return [createEvents()];
}
