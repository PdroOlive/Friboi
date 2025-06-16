import { Region } from "react-native-maps";

export interface ClientInfosProps {
    balance: number;
    request: boolean;
    operation: string
}
export interface ClientProps {
    name: string;
    salesperson?: string
    currentLocation: Region
    infos: ClientInfosProps
}




export const clients: ClientProps[] = [
    {
        name: "West Boi",
        salesperson: "Pedro Caldas",
        currentLocation: {
            latitude: -1.4503762384424286, // Exemplo: Latitude de Belém
            longitude: -48.49687318410518, // Exemplo: Longitude de Belém
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        },
        infos: {
            balance: 3000,
            operation: "Seg a Dom - 08h as 13h",
            request: false
        }
    },
    {
        name: "Égua da Carne",
        salesperson: "Pedro Caldas",
        currentLocation: {
            latitude: -1.4613590198554425, // Exemplo: Latitude de Belém
            longitude: -48.49687318410518, // Exemplo: Longitude de Belém
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        },
        infos: {
            balance: 1200,
            operation: "Seg a Dom - 08h as 13h",
            request: false
        }

    },
    {
        name: "D'Beef",
        salesperson: "Pedro Caldas",
        currentLocation: {
            latitude: -1.4610117709509218, // Exemplo: Latitude de Belém
            longitude: -48.50173972463678, // Exemplo: Longitude de Belém
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        },
        infos: {
            balance: 24000,
            operation: "Seg a Dom - 08h as 13h",
            request: false
        }
    },
    {
        name: "Frigobel Ver o Peso",
        salesperson: "Pedro Caldas",
        currentLocation: {
            latitude: -1.450458003814239, // Exemplo: Latitude de Belém
            longitude: -48.50285552353129, // Exemplo: Longitude de Belém
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        },
        infos: {
            balance: 5500,
            operation: "Seg a Dom - 08h as 13h",
            request: false
        }
    },
    {
        name: "Ceará Carnes",
        salesperson: "Pedro Caldas",
        currentLocation: {
            latitude: -1.4700210451458025, // Exemplo: Latitude de Belém
            longitude: -48.49126838116465, // Exemplo: Longitude de Belém
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        },
        infos: {
            balance: 14000,
            operation: "Seg a Dom - 08h as 13h",
            request: false
        }
    },
    {
        name: "Malu Carnes",
        salesperson: "Amanda Damasceno",
        currentLocation: {
            latitude: -1.4461432560177845, // Exemplo: Latitude de Belém
            longitude: -48.46876795790854, // Exemplo: Longitude de Belém
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        },
        infos: {
            balance: 40000,
            operation: "Seg a Dom - 08h as 13h",
            request: false
        }
    },
    {
        name: "Barão Carnes",
        salesperson: "Amanda Damasceno",
        currentLocation: {
            latitude: -1.4672400309882208, // Exemplo: Latitude de Belém
            longitude: -48.466004583046725, // Exemplo: Longitude de Belém
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        },
        infos: {
            balance: 11000,
            operation: "Seg a Dom - 07:30h as 12:30h",
            request: false
        }
    },
    {
        name: "Açougue Senador Carnes",
        salesperson: "Amanda Damasceno",
        currentLocation: {
            latitude: -1.431276854934378, // Exemplo: Latitude de Belém
            longitude: -48.48553205605986, // Exemplo: Longitude de Belém
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        },
        infos: {
            balance: 12000,
            operation: "Seg a Sab - 08:30h as 13h",
            request: false
        }
    },
    {
        name: "Emporio Bovino",
        salesperson: "Carlos Oliveira",
        currentLocation: {
            latitude: -1.4546623559906415, // Exemplo: Latitude de Belém
            longitude: -48.488865122007134, // Exemplo: Longitude de Belém
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        },
        infos: {
            balance: 4000,
            operation: "Seg a Dom - 09h as 13h",
            request: false
        }
    },
    {
        name: "Lobato Carnes & Mariscos",
        salesperson: "Carlos Oliveira",
        currentLocation: {
            latitude: -1.4676185755725957, // Exemplo: Latitude de Belém
            longitude: -48.4898092595333, // Exemplo: Longitude de Belém
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        },
        infos: {
            balance: 5000,
            operation: "Seg a Sex - 09h as 13h",
            request: false
        }
    },
    {
        name: "Casa de Carnes | Boi na Brasa Belém",
        salesperson: "Carlos Oliveira",
        currentLocation: {
            latitude: -1.466074129483786, // Exemplo: Latitude de Belém
            longitude: -48.47435973637779, // Exemplo: Longitude de Belém
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        },
        infos: {
            balance: 35000,
            operation: "Seg a Dom - 07h as 13h",
            request: false
        }
    },
    {
        name: "Açougue Box Boi",
        salesperson: "Carlos Oliveira",
        currentLocation: {
            latitude: -1.4294385332765598, // Exemplo: Latitude de Belém
            longitude: -48.484913396810654, // Exemplo: Longitude de Belém
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        },
        infos: {
            balance: 20000,
            operation: "Seg a Sab - 07h as 13h",
            request: false
        }
    },
]

// export const clientTwo = [
    
// ]

// export const clientThree = [
//     {
//         name: "Malu Carnes",
//         vendedor: "Amanda Damasceno",
//         currentLocation: {
//             latitude: -1.4461432560177845, // Exemplo: Latitude de Belém
//             longitude: -48.46876795790854, // Exemplo: Longitude de Belém
//             latitudeDelta: 0.0922,
//             longitudeDelta: 0.0421,
//         }
//     },
//     {
//         name: "Barão Carnes",
//         vendedor: "Amanda Damasceno",
//         currentLocation: {
//             latitude: -1.4672400309882208, // Exemplo: Latitude de Belém
//             longitude: -48.466004583046725, // Exemplo: Longitude de Belém
//             latitudeDelta: 0.0922,
//             longitudeDelta: 0.0421,
//         }
//     },
//     {
//         name: "Açougue Senador Carnes",
//         vendedor: "Amanda Damasceno",
//         currentLocation: {
//             latitude: -1.431276854934378, // Exemplo: Latitude de Belém
//             longitude: -48.48553205605986, // Exemplo: Longitude de Belém
//             latitudeDelta: 0.0922,
//             longitudeDelta: 0.0421,
//         }
//     },
// ] 
