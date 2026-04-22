# JiPaNaytto

Moderni verkkosovellus JIPA-yritykselle, jossa on responsiivinen frontend Reactilla ja Vitellä. Sovellus hakee sisällön jo käyttöön otetusta Sanity CMS:stä.

## Projektin Yleiskatsaus

JiPaNaytto on JIPA-yrityksen verkkosivusto, joka esittelee yrityksen tiimin jäsenet (työntekijät) ja heidän projektinsa. Sovellus koostuu React-pohjaisesta verkkosivustosta, joka näyttää sisällön Sanity CMS:stä.

Verkkosivusto sisältää sivut etusivulle, tiimille, projekteille/referensseille ja yhteystiedoille.

## Tekniset tiedot

### Frontend
- **React**: Käyttöliittymäkirjasto käyttöliittymän rakentamiseen
- **Vite**: Nopea rakennusväline ja kehityspalvelin
- **React Router**: Asiakaspuolen reititys
- **Bootstrap**: CSS-kehys responsiiviseen suunnitteluun
- **React Bootstrap**: Bootstrap-komponentit Reactille
- **Sanity Client**: JavaScript-asiakas sisällön hakemiseen Sanity:stä
- **React Icons**: Kuvakekirjasto

## Projektin Rakenne

```
JiPaNaytto/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── HomePage/
│   │   │   ├── Employees/
│   │   │   ├── Projects/
│   │   │   ├── Contact.jsx
│   │   │   └── Footer.jsx
│   │   ├── sanity/
│   │   │   └── client.ts          # Sanity-asiakkaan konfiguraatio
│   │   ├── App.jsx                # Pääkomponentti reitityksellä
│   │   ├── main.jsx               # Sovelluksen aloituspiste
│   │   └── index.css              # Globaalit tyylit
│   ├── package.json
│   ├── vite.config.js
│   └── README.md
└── README.md                      # Tämä tiedosto
```

## Tietomallit

### Työntekijä
- **name** (string, vaadittu): Työntekijän nimi
- **photo** (image, vaadittu): Työntekijän kuva
- **role** (string): Työntekijän rooli/asema
- **contacts** (array): Yhteystiedot mukaan lukien sähköposti ja puhelin

### Projekti
- **name** (string, vaadittu): Projektin nimi
- **photo** (image, vaadittu): Projektin kuva
- **description** (string, vaadittu): Projektin kuvaus
- **category** (string): Projektin kategoria

## Aloittaminen

### Edellytykset
- Node.js (versio 18 tai uudempi)
- npm tai yarn paketinhallinta

### Asennus

1. **Kloonaa repositorio**
   ```bash
   git clone <repository-url>
   cd JiPaNaytto
   ```

2. **Asenna frontend**
   ```bash
   cd frontend
   npm install
   ```

### Konfiguraatio

**Frontend-konfiguraatio**
- Päivitä `frontend/src/sanity/client.ts` Sanity-projektin tiedoilla

### Sovelluksen Suorittaminen

**Käynnistä Frontend**
```bash
cd frontend
npm run dev
```
Verkkosivusto on saatavilla osoitteessa `http://localhost:5173`

### Tuotantorakentaminen

**Rakenna Frontend**
```bash
cd frontend
npm run build
```

## Kehitys

### Käytettävissä Olevat Skriptit

#### Frontend
- `npm run dev`: Käynnistä kehityspalvelin kuuman uudelleenlatauksen kanssa
- `npm run build`: Rakenna tuotantoa varten
- `npm run preview`: Esikatsele tuotantorakennetta
- `npm run lint`: Suorita ESLint

### Koodityyli
- Käyttää ESLint-koodin tarkistukseen
- Prettier koodin muotoiluun
