import { Programa } from "./programa";
export const PROGRAMAS: Programa[] = [
    {
        id: "52",
        nombre: "Ingeniería de Sistemas",
        estudiantes: [
            {
                id: "521",
                nombre: "Jairo",
                saberPro: {
                    lecturaCritica: 45,
                    ingles: 12,
                    ciudadanas: 94,
                    razonamiento: 78,
                    comunicacionEscrita: 58
                },
                saber: {
                    lecturaCritica: 61,
                    ingles: 69,
                    ciudadanas: 85,
                    razonamiento: 49,
                    comunicacionEscrita: 73
                },
                porsaberpro: {
                    lecturaCritica: 45 / 80,
                    ingles: 12 / 80,
                    ciudadanas: 94 / 80,
                    razonamiento: 78 / 80,
                    comunicacionEscrita: 58 / 80
                },
                porsaber: {
                    lecturaCritica: 45 / 100,
                    ingles: 69 / 100,
                    ciudadanas: 85 / 100,
                    razonamiento: 49 / 100,
                    comunicacionEscrita: 73 / 100
                },
                valoragregado: {
                    lecturaCritica: (45 / 80) - (45 / 100),
                    ingles: (12 / 80) - (69 / 100),
                    ciudadanas: (94 / 80) - (85 / 100),
                    razonamiento: (78 / 80) - (49 / 100),
                    comunicacionEscrita: (58 / 80) - (73 / 100)
                }
            },
            {
                id: "521",
                nombre: "Pepito",
                saberPro: {
                    lecturaCritica: 56,
                    ingles: 50,
                    ciudadanas: 68,
                    razonamiento: 81,
                    comunicacionEscrita: 30
                },
                saber: {
                    lecturaCritica: 54,
                    ingles: 49,
                    ciudadanas: 75,
                    razonamiento: 12,
                    comunicacionEscrita: 93
                },
                porsaberpro: {
                    lecturaCritica: 56 / 80,
                    ingles: 50 / 80,
                    ciudadanas: 68 / 80,
                    razonamiento: 81 / 80,
                    comunicacionEscrita: 30 / 80
                },
                porsaber: {
                    lecturaCritica: 54 / 100,
                    ingles: 49 / 100,
                    ciudadanas: 75 / 100,
                    razonamiento: 12 / 100,
                    comunicacionEscrita: 93 / 100
                },
                valoragregado: {
                    lecturaCritica: (56 / 80) - (54 / 100),
                    ingles: (50 / 80) - (49 / 100),
                    ciudadanas: (68 / 80) - (75 / 100),
                    razonamiento: (81 / 80) - (12 / 100),
                    comunicacionEscrita: (30 / 80) - (93 / 100)
                }
            }
        ]
    },

    {
        id: "53",
        nombre: "Ingeniería Civil",
        estudiantes: [
            {
                id: "531",
                nombre: "Benito",
                saberPro: {
                    lecturaCritica: 60,
                    ingles: 72,
                    ciudadanas: 75,
                    razonamiento: 90,
                    comunicacionEscrita: 55
                },
                saber: {
                    lecturaCritica: 15,
                    ingles: 96,
                    ciudadanas: 46,
                    razonamiento: 34,
                    comunicacionEscrita: 94
                },
                porsaberpro: {
                    lecturaCritica: 60 / 80,
                    ingles: 72 / 80,
                    ciudadanas: 75 / 80,
                    razonamiento: 90 / 80,
                    comunicacionEscrita: 55 / 80
                },
                porsaber: {
                    lecturaCritica: 15 / 100,
                    ingles: 96 / 100,
                    ciudadanas: 46 / 100,
                    razonamiento: 34 / 100,
                    comunicacionEscrita: 94 / 100
                },
                valoragregado: {
                    lecturaCritica: (60 / 80) - (15 / 100),
                    ingles: (72 / 80) - (96 / 100),
                    ciudadanas: (75 / 80) - (46 / 100),
                    razonamiento: (90 / 80) - (34 / 100),
                    comunicacionEscrita: (55 / 80) - (94 / 100)
                }
            },
            {
                id: "532",
                nombre: "Facundo",
                saberPro: {
                    lecturaCritica: 87,
                    ingles: 45,
                    ciudadanas: 64,
                    razonamiento: 19,
                    comunicacionEscrita: 92
                },
                saber: {
                    lecturaCritica: 64,
                    ingles: 38,
                    ciudadanas: 46,
                    razonamiento: 91,
                    comunicacionEscrita: 87
                },
                porsaberpro: {
                    lecturaCritica: 87 / 80,
                    ingles: 45 / 80,
                    ciudadanas: 64 / 80,
                    razonamiento: 19 / 80,
                    comunicacionEscrita: 92 / 80
                },
                porsaber: {
                    lecturaCritica: 64 / 100,
                    ingles: 38 / 100,
                    ciudadanas: 46 / 100,
                    razonamiento: 91 / 100,
                    comunicacionEscrita: 87 / 100
                },
                valoragregado: {
                    lecturaCritica: (87 / 80) - (64 / 100),
                    ingles: (45 / 80) - (38 / 100),
                    ciudadanas: (64 / 80) - (46 / 100),
                    razonamiento: (19 / 80) - (91 / 100),
                    comunicacionEscrita: (92 / 80) - (87 / 100)
                }
            },

        ]
    },

    {
        id: "54",
        nombre: "Ingeniería Electrónica",
        estudiantes: [
            {
                id: "541",
                nombre: "Aquiles",
                saberPro: {
                    lecturaCritica: 100,
                    ingles: 43,
                    ciudadanas: 81,
                    razonamiento: 71,
                    comunicacionEscrita: 73
                },
                saber: {
                    lecturaCritica: 56,
                    ingles: 71,
                    ciudadanas: 12,
                    razonamiento: 79,
                    comunicacionEscrita: 96
                },
                porsaberpro: {
                    lecturaCritica: 100 / 80,
                    ingles: 43 / 80,
                    ciudadanas: 81 / 80,
                    razonamiento: 71 / 80,
                    comunicacionEscrita: 73 / 80
                },
                porsaber: {
                    lecturaCritica: 56 / 100,
                    ingles: 71 / 100,
                    ciudadanas: 12 / 100,
                    razonamiento: 79 / 100,
                    comunicacionEscrita: 96 / 100
                },
                valoragregado: {
                    lecturaCritica: (100 / 80) - (56 / 100),
                    ingles: (43 / 80) - (71 / 100),
                    ciudadanas: (81 / 80) - (12 / 100),
                    razonamiento: (71 / 80) - (79 / 100),
                    comunicacionEscrita: (73 / 80) - (96 / 100)
                }
            },
            {
                id: "542",
                nombre: "Lupita",
                saberPro: {
                    lecturaCritica: 180,
                    ingles: 52,
                    ciudadanas: 71,
                    razonamiento: 74,
                    comunicacionEscrita: 91
                },
                saber: {
                    lecturaCritica: 12,
                    ingles: 82,
                    ciudadanas: 71,
                    razonamiento: 88,
                    comunicacionEscrita: 13
                },
                porsaberpro: {
                    lecturaCritica: 80 / 80,
                    ingles: 52 / 80,
                    ciudadanas: 71 / 80,
                    razonamiento: 74 / 80,
                    comunicacionEscrita: 91 / 80
                },
                porsaber: {
                    lecturaCritica: 12 / 100,
                    ingles: 82 / 100,
                    ciudadanas: 71 / 100,
                    razonamiento: 88 / 100,
                    comunicacionEscrita: 13 / 100
                },
                valoragregado: {
                    lecturaCritica: (80 / 80) - (12 / 100),
                    ingles: (52 / 80) - (82 / 100),
                    ciudadanas: (71 / 80) - (71 / 100),
                    razonamiento: (74 / 80)- (88 / 100),
                    comunicacionEscrita: (91 / 80) - (13 / 100)
                }
            }
        ]
    }
]