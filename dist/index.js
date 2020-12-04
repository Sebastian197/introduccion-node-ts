"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.holaAlCursoNPM = exports.holaPersonalizado = exports.hola = void 0;
const hola = () => {
    console.log('Hola mundo!');
};
exports.hola = hola;
const holaPersonalizado = (nombre) => {
    console.log(`Hola ${nombre}`);
};
exports.holaPersonalizado = holaPersonalizado;
const holaAlCursoNPM = () => {
    console.log('Hola al curso NPM!');
};
exports.holaAlCursoNPM = holaAlCursoNPM;
