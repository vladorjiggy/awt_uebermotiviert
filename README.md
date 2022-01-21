# IT-Konzept / Ein Blog über Reisen

## 1. Gesamtüberblick

### 1.1 Beschreibung der Seite

Das Projekt, welches wir im Rahmen des Kurses umsetzten wollen, wird
ein Blog sein. Der Blog wird speziell zu dem Thema Reisen sein. Der User
des Blogs (Admin des Blogs) soll Beiträge erstellen, editieren und löschen
können. Besucher der Blog-Seiten können die Beiträge lesen. Die Titel der
Beiträge können über eine Suchfunktion gefunden werden. Des Weiteren
sollen die Beiträge durch gesetzte Kategorien gefiltert angezeigt werden
können. 

### 1.2 Zielgruppe

Personen der Zielgruppe „Leser“: Privatpersonen, die sich für das Thema
Reisen interessieren
Personen der Zielgruppe „User/Admin“: Privatpersonen, die gerne über
Reisen berichten und dazu ein minimalistisches CMS nutzen möchten

### 1.3 Funktionen der Seite

- User bekommt ein Adminname mit default adminPasswort erstellt
beim Systemstart
- Nach dem Einloggen kann dann das default Passwort in persönliches
Passwort geändert werden
- User kann Beiträge erstellen, editieren, löschen
- Beiträge erstellen: können getaggt werden mit Kategorien (Muss:
initialisieren 6 vorgefertigte Kategorien)
- Suchfunktion (Suche nach Titeln)
- Aus Besuchersicht: Blog
- Aus Usersicht: CMS

### 1.4 Nutzer- und Berechtigungskonzept

- Besucher hat nur Read-Rechte für die Blog-Artikel
- Es gibt nur einen User = Adminrechte
- Admin kann Beiträge erstellen, editieren und löschen

### 1.5 Voraussetzung für die Nutzung der Webseite

- Browser in dem JavaScript erlaubt sein muss
- Cookies müssen erlaubt sein, zumindest bei Admin

### 1.6 Eventuelle Features

- Kommentar-System
- Up- & Downvotes als Bewertungssystem (vergleichbar mit „Likes“)

## 2. Generelle Überlegungen

- Umsetzung im Scrum Modus
- Trennung von Backend und Frontend
  - Backend hat eine API-Spezifikation
- Datenbanktechnologie soll austauschbar sein
  - Nutzung ODM
- User bleibt eine gewisse Zeit lang eingeloggt (Session-Management)
- Daten im Frontend werden zwischengespeichert um aus
Performancegründen HTTP-Requests zu sparen

## 3. Architektur

### 3.1 Technologien

- Frontend: React
  - Statemanagement: Redux
  - Routing: React Router
- Backend: NodeJs / Express
  - Sessionmanagement: Express-Session + SessionCookie
- Sessionstorage: MongoDB
- Datenbank: MongoDB Atlas 
  - ODM: mongoose
- Design: Stylesheets Erstellung mit Sass

## 3.2 Anwendungsdiagramm

![Anwendungsdiagramm](https://github.com/vladorjiggy/awt_uebermotiviert/blob/main/Architektur.png)

## 3.3 Deployment

- Heroku

## 4. Projektweite Technologien

- Planung: [Trello](https://trello.com/b/bXSeorLS/projektplanung)
- Kommunikation: Discord
- API-Spezifikation: [Swagger](https://app.swaggerhub.com/apis/awt-uebermotiviert/AWT/1.0.0)
- Versionsverwaltung: Git
- Repository: [Github](https://github.com/vladorjiggy/awt_uebermotiviert.git)


!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!WICHTIG!!!!!!!!!!!!!!!!!!!
// Configure und Monitor weglassen?
// defaultLoginDaten noch irgendwo aufführen?
// wie machen wir das mit der .env? "durch npm run production zb" "Nun, nicht die originalen. aber ein example.env ohne credentials"
// Tools für Build, Release, Deploy müssen noch in die Liste 
//  "Im weiteren Verlauf sollte euer Konzept größtenteils nur noch auf die Verwendeten Technologien eingehen (also Verweise auf Tutorials, Konfiguration und Inbetriebnahme). Nicht zu viel umschreiben und keine Prosa." meint er damit, dass wir das Konzept nochmal umschreiben sollen?

!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

## 5. Teamaufteilung in Kernkompetenzen:

Plan: 
- Sprintplanung: alle
- Trello update: Isabelle Karal

Create:
- Backend: Vlad Fetisov
- Frontend: Safak Altundag, Jim Kendzierski
- Design/Styling: Isabelle Karal

Build, Release, Deploy, Configure: Vlad Fetisov

Operate / Monitor: 

## 6. Vorstellung DevOps-Ansatz
## 6.1 Vorstellung der Tools

Plan: 
- Trello (Sprintplanung und Orga-Übersicht)
- Discord (Besprechungen und Problemlösungen)

Create: 
- Entwicklungsumgebung: Visual Studio Code 
- Visuelle Übersicht der Datenbank mit MongoDB Compass 
- Browser: Chrome, Firefox
- Browser-DevTools
- Global dependencies: node js, npm & create-react-app
- Backend dependencies:
    "bcrypt": "^5.0.1",
    "body-parser": "^1.19.1",
    "config": "^3.3.6",
    "connect-mongo": "^4.6.0",
    "cookie-parser": "^1.4.6",
    "cors": "^2.8.5",
    "dotenv": "^10.0.0",
    "express": "^4.17.1",
    "express-session": "^1.17.2",
    "mongodb": "^4.2.0",
    "mongoose": "^6.0.13",
    "multer": "^1.4.4",
    "nodemon": "^2.0.15"
- Frontend dependencies:
    "base-64": "^1.0.0",
    "react": "^17.0.2",
    "react-app": "^1.1.2",
    "react-dom": "^17.0.2",
    "react-redux": "^7.2.6",
    "react-router-dom": "^6.2.1",
    "react-scripts": "4.0.3",
    "redux": "^4.1.2",
    "redux-persist": "^6.0.0",
    "redux-thunk": "^2.4.1",
    "web-vitals": "^1.1.2"

Build: "create-react-app" (basierend auf webpack) -> npm run build

Release: 
- lokal: kein Tool
- production: git-flow bei push in Main Branch

Deploy: git-action pipeline push zu heroku

Configure:  selbsterstellte env Datei (lokal)

Monitor: Browser-DevTools

## 6.2 Vorraussetzungen:

- Nodejs > v14 & npm > 5
- MongoDB > 5
- create-react-app via npm

## 6.3 Ablauf für den Start der Anwendung (lokal):

1. Projekt aus dem Github-Verzeichnis ziehen unter https://github.com/vladorjiggy/awt_uebermotiviert.git

2. Projekt öffnen in Editor jeglicher Art (z.B. Visual Studio Code)

3. .env Datei anlegen | Beispiel: example.env

4. Datenbank Mongodb 5.0 herunterladen unter https://www.mongodb.com/try/download/community und installieren

5. Die "mongod" Anwendung ausführen (unter Windows im Verzeichnis von Mongodb, Pfad: MongoDB/Server/5.0/bin)

6. ConnectionString in die configDatei schreiben unter /server/config/default.json

7. Backend: 
  - Konsole öffnen und in den Ordner frontend navigieren mittels "cd server"
  - Im Verzeichnis server: Installation der dependencies mittels "npm install"
  - "npm start" um das Backend zu starten

8. Frontend: 
  - Konsole öffnen und in den Ordner frontend navigieren mittels "cd frontend"
  - Im Verzeichnis frontend: Installation der dependencies mittels "npm install"
  - "npm start" um das Frontend zu starten 

9. (Optional bei Bedarf) Bei MongoDB Compass angelegte Datenbank einsehen:
  - MongoDB Compass installieren unter https://www.mongodb.com/products/compass
  - öffnen und unter New Connection auf den Button Connect klicken
  - unter Datenbank awtReiseblog können die Collections "categories", "posts", "sessions" und "users" eingesehen werden

10. Start der Anwendung: 
  - Wenn frontend und Backend laufen im Browser http://localhost:3000/ aufrufen
  - Anwendung kann als normaler Nutzer/Leser benutzt werden oder durch Klick auf "Login" kann man das CMS nutzen
  - um sich im CMS anzumelden benötigt man die Adminzugangsdaten aus der default Datei User.json (könne bei Bedarf geändert werden)
  

## 6.4 Ablauf für das Deployment und Start der Anwendung (production Build):

1. Projekt aus dem Github-Verzeichnis ziehen unter https://github.com/vladorjiggy/awt_uebermotiviert.git

2. Projekt öffnen in Editor jeglicher Art (z.B. Visual Studio Code)

3. Heroku CLI herunterladen und installieren (https://devcenter.heroku.com/articles/heroku-cli)

4. Einloggen in der Heroku CLI:
  - Terminal öffnen 
  - "heroku login" ausführen

5. In Heroku eine App erstellen

6. MongoDB Atlas Cluster erstellen:
  - Einloggen oder Registrieren unter https://www.mongodb.com/atlas/database
  - Cluster erstellen
  - Netzwerkfreigabe für alle IP-Adressen freigeben
  - Connection-String erstellen

7. UmgebungsVariablen in der zuvor erstellten Heroku App eintragen anhand der .env.example Datei im Ordner server

8. Im Ordner frontend eine .env Datei erstellen und Variablen eintragen anhand der Datei .env.example im Ordner frontend

9. Im Ordner server ein git repo für heroku erstellen -> git init

10. Im Ordner server die heroku-app als remote repo hinzufügen -> heroku git:remote -a <appname>

11. Im Ordner frontend "npm run production" ausführen