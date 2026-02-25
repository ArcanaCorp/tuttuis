import { IconBell, IconClock, IconId, IconUser } from "@tabler/icons-react";

export const landingText = {
    hero: {
        title: `Control escolar con alertas al <span class="text-primary">instante</span>`,
        subtitle: "Un sistema de seguimiento continuo basado en QR que conecta a las escuelas y las familias mediante notificaciones automatizadas de WhatsApp.",
        cta: {
            txt: "Solicitar demo",
            url: `https://wa.me/51966327426/?text=Hola!\n\nQuiero solicitar una demostración acerca de la libreta digital.`
        },
        alt: {
            txt: "Ingresar",
            url: '/auth/login'
        },
        extra: ['Qr Traking', 'Notificaciones por WhatsApp']
    },
    problems: {
        title: `<p>El problema no es la asistencia.</p> <p class="text-muted">Es la falta de control.</p>`,
        subtitle: 'Muchos colegios siguen operando con procesos manuales que consumen tiempo y generan errores.',
        items: [
            {
                tit: 'Registro manual en libretas',
                txt: 'Procesos lentos, propensos a errores y pérdida de información.'
            },
            {
                tit: 'Firmas físicas poco auditables',
                txt: 'Difícil verificación y riesgo de falsificaciones.'
            },
            {
                tit: 'Llamadas telefónicas para avisos',
                txt: 'Consumen tiempo y no garantizan respuesta inmediata.'
            },
            {
                tit: 'Retrasos en comunicación con padres',
                txt: 'La información no siempre llega cuando se necesita.'
            },
            {
                tit: 'Historial difícil de consultar',
                txt: 'Buscar reportes antiguos toma demasiado tiempo.'
            }
        ]
    },
    pros: {
        title: `Digitaliza el flujo completo en <span class="text-primary">minutos</span>`,
        subtitle: 'ttutis automatiza el registro, la comunicación y la trazabilidad.',
        items: [
            {
                ico: <IconUser/>,
                tit: 'Registro inteligente',
                txt: 'Carga individual o masiva de alumnos y generación de tarjeta escolar con QR único.'
            },
            {
                ico: <IconId/>,
                tit: 'Escaneo en segundos',
                txt: 'El auxiliar escanea el QR y la asistencia queda registrada automáticamente.'
            },
            {
                ico: <IconBell/>,
                tit: 'Notificación inmediata',
                txt: 'Los padres reciben aviso automático por WhatsApp en tiempo real.'
            },
            {
                ico: <IconClock/>,
                tit: 'Historial auditable',
                txt: 'Toda la información queda centralizada y exportable.'
            }
        ]
    },
    howWork: {
        title: 'Cómo <span class="text-primary">funciona</span> la plataforma',
        subtitle: 'Implementa el control escolar digital en pocos pasos.',
        items: [
            {
                num: '1', 
                tit: 'Registro',
                txt: 'Se registran los alumnos.'
            },
            {
                num: '2', 
                tit: 'Generar QRs',
                txt: 'Se genera su QR único.'
            },
            {
                num: '3', 
                tit: 'Escaneo diario',
                txt: 'El auxiliar escanea al ingresar o salir.'
            },
            {
                num: '4', 
                tit: 'Alertas',
                txt: 'El padre recibe notificación automática.'
            },
            {
                num: '5', 
                tit: 'Revisar reportes',
                txt: 'El colegio mantiene historial centralizado.'
            }
        ]
    },
    modern: {
        title: `<span class="text-primary">Moderniza</span> tu colegio hoy`,
        subtitle: 'Implementación rápida. Sin infraestructura compleja. Sin procesos manuales.',
        items: [
            {
                tit: 'Implementación rápida',
                txt: 'Estará en funcionamiento en menos de 48 horas'
            },
            {
                tit: 'Confianza de los padres',
                txt: 'Brinde tranquilidad a las familias con transparencia en tiempo real'
            },
            {
                tit: 'La seguridad es lo primero',
                txt: 'Control estricto de quién entra y sale del colegio'
            }
        ],
        cta: {
            txt: "Solicitar demostración",
            url: `https://wa.me/51966327426/?text=Hola!\n\nQuiero solicitar una demostración acerca de la libreta digital.`
        },
    }
};